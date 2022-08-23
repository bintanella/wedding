export default function queryData (data = [], {filterFunctions = [], sortFunctions = [], totalDataPerPage = null, currentPage = 1}) {
  if (totalDataPerPage === null) {
    totalDataPerPage = data.length;
  }
  let returnedData = data && data.slice();
  filterFunctions.map(filterFunction => {
    returnedData = returnedData && returnedData.filter(row => filterFunction(row));
  })
  sortFunctions.map(sortFunction => {
    returnedData = returnedData && returnedData.sort(sortFunction);
  })
  return returnedData ?
    returnedData.slice((currentPage - 1) * totalDataPerPage, currentPage * totalDataPerPage) :
    returnedData;
}
