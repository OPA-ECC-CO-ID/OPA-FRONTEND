import DataTable from 'datatables.net'
import '@/pages/backend/app-backend'

$(document).ready(function () {
  $('#example').DataTable({
    ajax: {
      url: API_URL + '/api/v1/data-table',
      dataSrc: 'data.data',
    },
    searchDelay: 400,
    processing: true,
    serverSide: true,
    drawCallback: function (settings) {
      const api = this.api()
      const totalPages = api.page.info().pages
      if (totalPages <= 1) {
        $('#example_paginate').hide()
      } else {
        $('#example_paginate').show()
      }
    },
  })
})
