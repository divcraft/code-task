# Overview

The app contains a table with data that have been fetched from outer source. The table contains the data of work orders along with details, like status or description.
There is a possibility to search through the table data with a search input included to the project.

# Technologies used in the project

* typescript
* redux (redux toolkit)
* scss modules
* custom hooks
* higher order components

# Code desctiption

The project contains:
* 3 components
* 1 higher order component
* 1 custom hook
* 2 redux reducers

Data has been fetched thanks to createAsyncThunk function which is provided by redux toolkit.

Components that require fetched data to be mounted are used with FetchedComponent. It's a higher order component that provides proper DOM elements in every case of fetch result (eighter for loading, successed or failured promise).

The Project contains useSearch hook, that filters order list by search value and returns a new array with searched values. Both data are taken from redux store. The new array has been plugged in OrdersTable component, where it will be mapped and displayed according to our needs.


Hope you enjoyed and liked reviewing this project ;)
