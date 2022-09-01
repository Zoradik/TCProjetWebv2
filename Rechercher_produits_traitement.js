

var motcle  = $_GET['q'];

$.ajax({ 
    type: 'GET', 
    url: 'https://fr.openfoodfacts.org/categorie/'+motclé+'.json?page='+nombrepage,
    data: { get_param: 'value' }, 
    success: function (data) { 
        var names = data
        $('#resulta').html(data);
    }
});