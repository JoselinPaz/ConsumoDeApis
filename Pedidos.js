var UrlGetPedidos = 'http://localhost:90/G5_19/controller/Pedidos.php?op=GetPedidos';
var UrlPostPedidos = 'http://localhost:90/G5_19/controller/Pedidos.php?op=InsertPedidos';
var UrlDeletePedidos = 'http://localhost:90/G5_19/controller/Pedidos.php?op=DeletePedidos';
var UrlUpdatePedidos = 'http://localhost:90/G5_19/controller/Pedidos.php?op=UpdatePedidos';
var UrlGetUno = 'http://localhost:90/G5_19/controller/Pedidos.php?op=GetUno';


$(document).ready(function () {
    CargarPedidos();
});

function CargarPedidos() {
    $.ajax({
        url: UrlGetPedidos,
        type: 'GET',
        datatype: 'JSON',
        success: function (response) {
            var MiItems = response;
            var valores = '';

            for (i = 0; i < MiItems.length; i++) {
                valores += '<tr>' +
                    '<td>' + MiItems[i].ID + '</td>' +
                    '<td>' + MiItems[i].ID_SOCIO + '</td>' +
                    '<td>' + MiItems[i].FECHA_PEDIDO + '</td>' +
                    '<td>' + MiItems[i].DETALLE + '</td>' +
                    '<td>' + MiItems[i].SUB_TOTAL + '</td>' +
                    '<td>' + MiItems[i].TOTAL_ISV + '</td>' +
                    '<td>' + MiItems[i].TOTAL + '</td>' +
                    '<td>' + MiItems[i].FECHA_ENTREGA + '</td>' +
                    '<td>' + MiItems[i].ESTADO + '</td>' +
                    '<td>' +
                    '<button class ="btn btn-info" onclick="CargarPedido(' + MiItems[i].ID + ')">Editar</button>' +
                    '<button class ="btn btn-danger" onclick="EliminarPedidos(' + MiItems[i].ID + ')">Eliminar</button>' +
                    '</td>' +
                    '</tr>';
                $('.Pedidos').html(valores);
            }

        }
    });
}


function ActualizarPedidos(ID) {
    var datosPedido = {
        ID: ID,
        ID_SOCIO: $("#ID_SOCIO").val(),
        FECHA_PEDIDO: $("#FECHA_PEDIDO").val(),
        DETALLE: $("#DETALLE").val(),
        SUB_TOTAL: $("#SUB_TOTAL").val(),
        TOTAL_ISV: $("#TOTAL_ISV").val(),
        TOTAL: $("#TOTAL").val(),
        FECHA_ENTREGA: $("#FECHA_ENTREGA").val(),
        ESTADO: $("#ESTADO").val()

    };
    var datosPedidojson = JSON.stringify(datosPedido);

    $.ajax({
        url: UrlUpdatePedidos,
        type: 'PUT',
        data: datosPedidojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        }
    });
    alert("Pedido Actualizado");
}

function CargarPedido(ID) {
    var datosPedido = {
        ID: ID
    };
    var datosPedidojson = JSON.stringify(datosPedido);

    $.ajax({
        url: UrlGetUno,
        type: 'POST',
        data: datosPedidojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function (response) {
            var MiItems = response;
            $('#ID').val(MiItems[0].ID);
            $('#ID_SOCIO').val(MiItems[0].ID_SOCIO);
            $('#FECHA_PEDIDO').val(MiItems[0].FECHA_PEDIDO);
            $('#DETALLE').val(MiItems[0].DETALLE);
            $('#SUB_TOTAL').val(MiItems[0].SUB_TOTAL);
            $('#TOTAL_ISV').val(MiItems[0].TOTAL_ISV);
            $('#TOTAL').val(MiItems[0].TOTAL);
            $('#FECHA_ENTREGA').val(MiItems[0].FECHA_ENTREGA);
            $('#ESTADO').val(MiItems[0].ESTADO);
            var btn_Actualizar = '<input type="submit" id="btn_Actualizar" onclick="ActualizarPedidos(' + MiItems[0].ID + ')"' +
                'value="Actualizar Pedidos" class="btn btn-primary"></input>';
            $('.button').html(btn_Actualizar);
        }
    });
}

function EliminarPedidos(ID) {
    var datosPedido = {
        ID: ID
    };
    var datosPedidojson = JSON.stringify(datosPedido);

    $.ajax({
        url: UrlDeletePedidos,
        type: 'DELETE',
        data: datosPedidojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        }
    });
    alert("Pedido Borrado");
}

function AgregarPedidos(){
    var datosPedido = {
        ID: $('#ID').val(),
        ID_SOCIO: $('#ID_SOCIO').val(),
        FECHA_PEDIDO: $('#FECHA_PEDIDO').val(),
        DETALLE: $('#DETALLE').val(),
        SUB_TOTAL: $('#SUB_TOTAL').val(),
        TOTAL_ISV: $('#TOTAL_ISV').val(),
        TOTAL: $('#TOTAL').val(),
        FECHA_ENTREGA: $('#FECHA_ENTREGA').val(),
        ESTADO: $('#ESTADO').val()
    };
    var datosPedidojson = JSON.stringify(datosPedido);

    $.ajax({
        url:UrlPostPedidos,
        type:'POST',
        data: datosPedidojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Pedido Agregado");
}


