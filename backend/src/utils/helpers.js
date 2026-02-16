/**
 * Build pagination object for query results
 * @param {number} page - Current page
 * @param {number} limit - Items per page
 * @param {number} total - Total items count
 * @returns {object} Pagination metadata
 */
const buildPagination = (page, limit, total) => {
  const totalPages = Math.ceil(total / limit);
  return {
    currentPage: page,
    totalPages,
    totalItems: total,
    itemsPerPage: limit,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  };
};

/**
 * Build sort object from query string
 * @param {string} sortString - Sort string (e.g., '-createdAt,name')
 * @returns {object} Mongoose sort object
 */
const buildSort = (sortString) => {
  if (!sortString) return { createdAt: -1 };

  const sortObj = {};
  const fields = sortString.split(',');

  fields.forEach((field) => {
    if (field.startsWith('-')) {
      sortObj[field.substring(1)] = -1;
    } else {
      sortObj[field] = 1;
    }
  });

  return sortObj;
};

/**
 * Build filter object from query parameters
 * @param {object} query - Express query object
 * @param {string[]} allowedFields - Fields allowed for filtering
 * @returns {object} MongoDB filter object
 */
const buildFilter = (query, allowedFields = []) => {
  const filter = {};
  const queryObj = { ...query };

  // Remove non-filter fields
  const excludeFields = ['page', 'limit', 'sort', 'fields', 'search'];
  excludeFields.forEach((field) => delete queryObj[field]);

  // Only include allowed fields
  Object.keys(queryObj).forEach((key) => {
    if (allowedFields.includes(key)) {
      filter[key] = queryObj[key];
    }
  });

  return filter;
};

module.exports = {
  buildPagination,
  buildSort,
  buildFilter
};
