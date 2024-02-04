class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // Copy the query string to an object
    const queryObj = { ...this.queryString };
    // Define fields to be excluded from the query string
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    // Remove excluded fields from the query string object
    excludedFields.forEach((el) => delete queryObj[el]);

    //? 1B) Advanced filtering:
    //Convert query object to a string and replace any gte, gt, lte, or lt keys with $gte, $gt, $lte, or $lt, respectively
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    // Apply the parsed query string object to the current query
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    // If the query string includes a 'sort' field, split it by commas and join with spaces
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      // Apply the sorted query to the current query
      this.query = this.query.sort(sortBy);
    } else {
      // Otherwise, sort by the 'createdAt' field in descending order
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    // If the query string includes a 'fields' field, split it by commas and join with spaces
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      // Apply the selected fields to the current query
      this.query = this.query.select(fields);
    } else {
      // Otherwise, exclude the '__v' field from the query
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    // Get the page number and limit from the query string, defaulting to 1 and 100, respectively
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    // Calculate the number of documents to skip based on the current page and limit
    const skip = (page - 1) * limit;

    // Apply the limit and skip to the current query
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
