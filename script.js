
$(document).ready(function(){
    $('#btn-add').click(function () {
        let bar_code = $('#bar-code').val();
        let p_name = $('#p-name').val();
        let buy_price = $('#buy-price').val();
        let sell_price = $('#sell-price').val();
        let Qnty = $('#Quantity').val();
        let expire = $('#expiry').val();
        let row ='<tr><td>'+($('tbody tr').length +1 ) +'</td><td>'+ bar_code + '</td><td>' + p_name +'</td><td>' + buy_price + '</td><td>' +sell_price+ '</td><td>' + Qnty + '</td><td>' +sell_price*Qnty +'</td><td>' + expire +'</td><td><button class="btn btn-success btn-edit mr-2">Edit</button><button class="btn btn-danger btn-delete">Delete</button></td></tr>' ;
        $('tbody').append(row);
        calculateTotal(); 
    });

    let rowEdit = null ; 
    $(document).on('click' ,'.btn-edit' , function(){
        rowEdit = $(this).closest('tr');
        let bar_code = $(rowEdit).find('td:eq(1)').text();
        let p_name = $(rowEdit).find('td:eq(2)').text();
        let buy_price =$(rowEdit).find('td:eq(3)').text();
        let sell_price = $(rowEdit).find('td:eq(4)').text();
        let Qnty = $(rowEdit).find('td:eq(5)').text();
        let expire = $(rowEdit).find('td:eq(7)').text();
        $('#bar-code').val(bar_code);
        $('#p-name').val( p_name);
        $('#buy-price').val(buy_price);
        $('#sell-price').val(sell_price);
        $('#Quantity').val(Qnty);
        $('#expiry').val(expire);        
    });

    $('#btn-update').click(function(){
        if (rowEdit) {
            let bar_code = $('#bar-code').val();
            let p_name = $('#p-name').val();
            let buy_price = $('#buy-price').val();
            let sell_price = $('#sell-price').val();
            let Qnty = $('#Quantity').val();
            let expire = $('#expiry').val();
            $(rowEdit).find('td:eq(1)').text(bar_code);
            $(rowEdit).find('td:eq(2)').text(p_name);
            $(rowEdit).find('td:eq(3)').text(buy_price);
            $(rowEdit).find('td:eq(4)').text(sell_price);
            $(rowEdit).find('td:eq(5)').text(Qnty);
            $(rowEdit).find('td:eq(6)').text(Qnty*sell_price);
            $(rowEdit).find('td:eq(7)').text(expire);
            calculateTotal();
            alert('Record Has Been Updated');
            rowEdit = null ;
           
        }
    });

    $(document).on('click' ,'.btn-delete' , function(){
        $(this).closest('tr').remove();
        calculateTotal();
    });

    $(document).on("change keyup blur", "#d-value", function() {
        let sVal = $('#type').val();
        if (sVal == 'fixed') {
           let discont = $('.total').val() - $(this).val();
            $('#grand').val(discont);
        }else{
            let main = $('.total').val();
            let disc = ($(this).val() / 100).toFixed(2);
            let mult = main * disc ;

            let discont = main - mult ; 
            $('#grand').val(discont);
        }
    });
  
    function calculateTotal(){
        let theTotal = 0;
        $("td:nth-child(7)").each(function () {
            let val = $(this).text();
            theTotal += parseInt(val);
        });
        $(".total").val(theTotal);
    }
    
});



