export async function deleteProduct(productId: string) {
  const formData = new FormData();

  formData.append("productId", productId);

  const response = await fetch(`/api/admin/products`, {
    method: "DELETE",
    body: formData,
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Failed to delete product.");
  }
  return result;
}

export const getPaginationRange = (currentPage: number, totalPages: number) => {
  let start = Math.max(currentPage - 2, 1);
  let end = Math.min(currentPage + 2, totalPages);

  // Adjust start if near the beginning
  if (currentPage <= 3) {
    end = Math.min(5, totalPages);
  }

  // Adjust end if near the end
  if (currentPage >= totalPages - 2) {
    start = Math.max(totalPages - 4, 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export function getPaginationRangeResponsive(
  currentPage: number,
  totalPages: number,
  isMobile: boolean
): (number | string)[] {
  if (!isMobile) {
    // Full pagination on larger screens
    return getPaginationRange(currentPage, totalPages);
  }

  const pages: (number | string)[] = [];

  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 2) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 1) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage, "...", totalPages);
    }
  }

  return pages;
}
