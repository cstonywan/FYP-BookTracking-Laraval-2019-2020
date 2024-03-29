//<!-- Click Create Button -->
$(document).on('click','.book-create-modal', function() {
    $('#book_add_modal').modal('show');
});

//<!-- Click Edit Button -->
$(document).on('click', '.book-edit-modal', function() {
    var select = document.getElementById('book_edit_tag_id');
    var option = document.createElement('option');
    option.text = $(this).data('tagid');
    select.add(option);
    $('#book_edit_id').val($(this).data('id'));
    $('#book_edit_tag_id').val($(this).data('tagid')); //added by tony  
    $('#book_edit_title').val($(this).data('title'));
    $('#book_edit_author').val($(this).data('author'));
    $('#book_edit_publisher').val($(this).data('publisher'));
    $('#book_edit_publicationYear').val($(this).data('publicationyear'));
    $('#book_edit_language').val($(this).data('language'));
    $('#book_edit_ISBN').val($(this).data('isbn'));
    $('#book_edit_description').val($(this).data('description'));
    $('#book_edit_pageNumber').val($(this).data('pagenumber'));
    $('#book_edit_type').val($(this).data('type'));
    $('#book_edit_status').val($(this).data('status'));
    $('#book_edit_modal').modal('show');
});

//<!-- Click Delete Button -->
$(document).on('click', '.book-delete-modal', function() {
    $('.id').text($(this).data('id'));
    $('.title').html($(this).data('title'));
    $('#book_delete_modal').modal('show');
});


$(document).ready(function(){
    //<!-- Submit Add Book Form -->
    $("#add_book_btn").on('click', function() {
        $('.add-input').removeClass("border border-danger");
        $('.error-box').removeClass("border border-danger rounded");
        $('.error-box').empty();
        var form = $('#add_book_form')[0];
        var formData = new FormData(form);
        $.ajax({
            type: 'POST',
            url: '/b/add',
            enctype: 'multipart/form-data',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                if ($.isEmptyObject(data.error)) {
                    location.reload();
                }
                else {
                    $('#add_book_error').addClass("border border-danger rounded");
                   
                    if (!($.isEmptyObject(data.error.tag_id))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.tag_id + "</h2>");
                        $('#tag_id').addClass("border border-danger");
                    }

                    if (!($.isEmptyObject(data.error.title))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.title + "</h2>");
                        $('#title').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.author))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.author + "</h2>");
                        $('#author').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.type))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.type + "</h2>");
                        $('#type').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.ISBN))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.ISBN + "</h2>");
                        $('#ISBN').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.publisher))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.publisher + "</h2>");
                        $('#publisher').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.publicationYear))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.publicationYear + "</h2>");
                        $('#publicationYear').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.language))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.language + "</h2>");
                        $('#language').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.pageNumber))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.pageNumber + "</h2>");
                        $('#pageNumber').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.description))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.description + "</h2>");
                        $('#description').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.image))) {
                        $('#add_book_error').append("<h2 class='pt-1'>" + data.error.image + "</h2>");
                        $('#image').addClass("border border-danger");
                    }
                }
            },
        });
    });

    //<!-- Submit Edit Book Form -->
    $("#edit_book_btn").on('click', function() {
        $('.edit-input').removeClass("border border-danger");
        $('.error-box').removeClass("border border-danger rounded");
        $('.error-box').empty();
        var form = $('#edit_book_form')[0];
        var formData = new FormData(form);
        $.ajax({
            type: 'POST',
            url: '/b/edit/' + $('#book_edit_id').val(),
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function(data) {
                if ($.isEmptyObject(data.error)) {
                    location.reload();
                }
                else {
                    $('#edit_book_error').addClass("border border-danger rounded");
                    if (!($.isEmptyObject(data.error.tag_id))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.tag_id + "</h2>");
                        $('#book_edit_tag_id').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.title))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.title + "</h2>");
                        $('#book_edit_title').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.author))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.author + "</h2>");
                        $('#book_edit_author').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.ISBN))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.ISBN + "</h2>");
                        $('#book_edit_ISBN').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.publisher))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.publisher + "</h2>");
                        $('#book_edit_publisher').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.publicationYear))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.publicationYear + "</h2>");
                        $('#book_edit_publicationYear').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.language))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.language + "</h2>");
                        $('#book_edit_language').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.pageNumber))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.pageNumber + "</h2>");
                        $('#book_edit_pageNumber').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.description))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.description + "</h2>");
                        $('#book_edit_description').addClass("border border-danger");
                    }
                    if (!($.isEmptyObject(data.error.image))) {
                        $('#edit_book_error').append("<h2 class='pt-1'>" + data.error.image + "</h2>");
                        $('#book_edit_image').addClass("border border-danger");
                    }
                }
            },
        });
    });

    //<!-- Submit Delete Form -->
    $("#delete_book_btn").on('click', function() {
        $.ajax({
            type: 'get',
            url: '/b/delete/' + $('.id').text(),
            data: {
                'id': $('.id').text(),
            },
            success: function() {
                location.reload();
            },
        });
    });
});

$(document).ready(function() {
    $("#startcheck").on('click', function() {
        realTime();       
        document.getElementById('startcheck').style.display = 'none';   
    });
})

// $(window).on("load", realTime);
// window.onload = realTime;
// $( document ).ready(function() {
//     realTime();
// });
var curlist = [];
function realTime() {

    setTimeout(function () {
        $.ajax({
             type:"GET",
             url:"/b/getajax",
             success : function(response) {   
                                                
                    var body = document.getElementById('misstablebody');
                    
                    if(response.length>0){
                        document.getElementById('misstable').style.display = 'inline';
                        document.getElementById('misstitle').style.display = 'inline';                             
                        document.getElementById('nomiss').style.display = 'none';                      
                    }
                    else{
                        document.getElementById('misstable').style.display = 'none';    
                        document.getElementById('nomiss').style.display = 'inline';                                                                                                     
                    }
                    var temlist = [];
                    for(var i=0; i<response.length; i++){                   
                        temlist.push(response[i][0]);                                                   
                    }                 

                    var removeList = [];
                    for(var i = 0; i< curlist.length;i++){
                        if(!temlist.includes(curlist[i])){
                            removeList.push(curlist[i]);                           
                        }
                    }
                   
                    if(removeList.length != 0){
                        
                        for(var i = 0; i <removeList.length;i++ ){                           
                            for(var j=0; j<body.childNodes.length; j++){
                                // alert(body.childNodes[j].firstElementChild.innerHTML);
                                if(body.childNodes[j].firstElementChild.innerHTML == removeList[i]){                                                                      
                                    var tr = body.childNodes[j];
                                    // alert(tr.firstElementChild.innerHTML);                                  
                                    body.removeChild(tr);                               
                                }
                            }
                        }
                    }                  
                    // document.getElementById('hi').innerHTML = removeList;            
                    for(var i = 0 ;i < response.length ; i++){
                        if(!curlist.includes(response[i][0])){
                            var tr = document.createElement('tr');
                            var td1 = document.createElement('td');
                            var td2 = document.createElement('td');
                            var td3 = document.createElement('td');
                            var book_id = document.createTextNode(response[i][0]);
                            var book_title = document.createTextNode(response[i][1]);
                            var tag_id = document.createTextNode(response[i][2]);

                            td1.appendChild(book_id);
                            td2.appendChild(book_title);
                            td3.appendChild(tag_id);
                            tr.appendChild(td1);
                            tr.appendChild(td2);
                            tr.appendChild(td3);
                            body.appendChild(tr);
                        }                 
                    }   

                curlist = [];   
                curlist = temlist;                                   
             }
        });
       
        realTime();
    }, 1000);
}

//  $(window).on("load", realTimePost);
// function realTimePost(){
//         $.ajaxSetup({
//             headers: {
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             }
//         });
//         $.ajax({            
//             type:'POST',                        
//             url:'/b/postajax',                             
//             data:{bookid:45},                             
//             success:function(data){  
                
//                 alert(data.success);                             
//             }                             
//         });  
// }
