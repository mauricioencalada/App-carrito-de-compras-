var ferreterias = ['Kywi','Pyca','FV'];
var cosas = {
    'clavos':{
        precio:0.15,
        id:'clv'
    },'martillo':{
        precio:7,
        id:'mrt'
    },'lija':{
        precio:0.50,
        id:'lij'
    },'sierra':{
        precio: 15,
        id:'sie'
    },'tornillo':{
        precio:0.10,
        id:'tor'
    }
}
var cosas = ['clavos','martillo','lija','serrucho','sierra','tornillo','pernos','destornillador']
var cantidad ={}
$('#irPageDos').hide();
$('#buscarFerreteria').on('click',function(e){
    var nombreFerreteria = $('#inputFerreteria').val();
    for(a in ferreterias){
        if(ferreterias[a]==nombreFerreteria){
            $('#botonPageDos').text(ferreterias[a]);
            $('#irPageDos').show();
        }
    }
    $('#nombreFerreteria').text(nombreFerreteria);
});
function factura(){
    $('#descripcion').append(
        $('<tr>')
    );

    console.log(cantidad);
}
$('#irPageTres').hide();
$('#buscarElementos').on('click',function(e){
    var nombreElemento = $('#inputElementos').val();
    for(e in cosas){
        if(cosas[e] == nombreElemento){
            cantidad[nombreElemento]=0
            $('#elementosBuscados').append(
                $('<p>',{
                    text:nombreElemento
                }).append(
                    $('<div style="float=right">').append(
                    $('<input type="button" class="" id="sumarElemento'+nombreElemento+'" value="+">')
                ).append(
                    $('<span>',{
                        id: nombreElemento,
                    }) 
                ) 
            )
            )
            $('#sumarElemento'+nombreElemento).on('click',function(e){
                cantidad[nombreElemento]+=1
                $('#'+nombreElemento).text(cantidad[nombreElemento])
                $('#irPageTres').show();
            })
        }
    }
})
$('#irPageTres').on('click',function(e){
    for(a in cantidad){
        $('#descripcion').append(
            $('<tr data-rel="external">',{text:a}),  
            $('<td>',{text:cantidad[a]}),
            $('<td>'),
            $('<td>')
            )
    }
})


