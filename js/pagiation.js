let table='#mainTable';






$('#maxRows').on('change',function () {
    var trnum=0
    let maxRows= parseInt($(this).val())
    $('#listpagination').empty()
    var totalRows=$(table+' tbody tr').length
    $(table+' tr:gt(0)').each(function () {
        trnum++
        if(trnum>maxRows){
            $(this).hide()
        }
        if(trnum<=maxRows){
            $(this).show()
        }

    })
    if(totalRows>maxRows){
        var pagenum=Math.ceil(totalRows/maxRows)
        for(var i=1;i<=pagenum;i++){
            $('#listpagination').append('<li><span value="'+i+'"class="pagination_id">'+ i +'</span></li>').show()
        }
    }
    $('.pagination_id').on('click',function () {
        let selectedPage=(parseInt($(this).text()))
        $(this).addClass(selectedPage)
        var rowsIndex=0
        $(table+' tr:gt(0)').each(function () {
            rowsIndex++
            if(rowsIndex>(maxRows*selectedPage)||rowsIndex<=((maxRows*selectedPage)-maxRows)){
                $(this).hide()
            }
            else{
                $(this).show()
            }

        })
    })


})
khoitao()
function khoitao() {
    var trnum=0
    let maxRows= 10
    $('#listpagination').empty()
    var totalRows=$(table+' tbody tr').length
    $(table+' tr:gt(0)').each(function () {
        trnum++
        if(trnum>maxRows){
            $(this).hide()
        }
        if(trnum<=maxRows){
            $(this).show()
        }

    })
    if(totalRows>maxRows){
        var pagenum=Math.ceil(totalRows/maxRows)
        for(var i=1;i<=pagenum;i++){
            $('#listpagination').append('<li><span value="'+i+'"class="pagination_id">'+ i +'</span></li>').show()
        }
    }
    $('.pagination_id').on('click',function () {
        let selectedPage=(parseInt($(this).text()))
        $(this).addClass(selectedPage)
        var rowsIndex=0
        $(table+' tr:gt(0)').each(function () {
            rowsIndex++
            if(rowsIndex>(maxRows*selectedPage)||rowsIndex<=((maxRows*selectedPage)-maxRows)){
                $(this).hide()
            }
            else{
                $(this).show()
            }

        })
    })
}





