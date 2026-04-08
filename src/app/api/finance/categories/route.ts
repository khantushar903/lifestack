import { NextRequest, NextResponse } from "next/server";
import {
  getCategoriesService,
  createCategoryService,
  ValidationError,
  ServiceError,
} from "@/lib/finance/services";

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Mock function to get userId from request
 * In production, this would extract userId from JWT token or session
 */
function getUserId(request: NextRequest): string {
  // For development/testing, return a mock userId
  // In production, extract from Authorization header or session
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    // TODO: Decode JWT token and extract userId
    // For now, return mock userId
    return "550e8400-e29b-41d4-a716-446655440000"; // Mock UUID
  }

  // Fallback mock userId for development
  return "550e8400-e29b-41d4-a716-446655440000";
}

/**
 * Standardized error response formatter
 */
function createErrorResponse(
  error: unknown,
  defaultMessage = "Internal server error",
): NextResponse {
  console.error("API Error:", error);

  if (error instanceof ValidationError) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed",
        details: error.errors,
      },
      { status: 400 },
    );
  }

  if (error instanceof ServiceError) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: defaultMessage,
    },
    { status: 500 },
  );
}

// =============================================================================
// API ROUTE HANDLERS
// =============================================================================

/**
 * GET /api/finance/categories
 * Retrieve all available categories
 */
export async function GET(request: NextRequest) {
  try {
    const categories = await getCategoriesService();

    return NextResponse.json({
      success: true,
      data: {
        categories,
        total: categories.length,
      },
    });
  } catch (error) {
    return createErrorResponse(error, "Failed to fetch categories");
  }
}

/**
 * POST /api/finance/categories
 * Create a new category
 *
 * Body: {
 *   name: string,
 *   type: 'income' | 'expense'
 * }
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON body",
        },
        { status: 400 },
      );
    }

    const { name, type } = body;

    // Basic validation
    if (!name || !type) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: name, type",
        },
        { status: 400 },
      );
    }

    // Create category using service
    const newCategory = await createCategoryService(name, type);

    return NextResponse.json(
      {
        success: true,
        data: {
          category: newCategory,
        },
        message: "Category created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return createErrorResponse(error, "Failed to create category");
  }
}
