db.pedidos.find().forEach(pedido=>print(pedido.usuario+":"+db.pedidos.find({usuario:pedido.usuario}).count()))
db.detalle_carritos.find().forEach(detalle=>print(detalle.producto+":"+db.detalle_carritos.find({producto:detalle.producto}).count()))


db.detalle_carritos.aggregate([{ $group: { _id: detalle_carritos.producto, total_sales: { $sum: detalle_carritos.producto } } },{ $sort: { total_sales: -1 } },{ $limit: 10 }])
  
db.detalle_carritos.aggregate([
    { $unwind: db.productos },
    { $group: { _id: db.productos.find(), cantidad_vendida: { $sum: "$productos.cantidad" } } },
    { $sort: { cantidad_vendida: -1 } },
    { $limit: 10 }
 ])
 


 db.detalle_carritos.aggregate([{$group : {_id:"$producto", productosVendidos : {$sum : 1 }}},{$limit : 10}, {$sort : { productosVendidos : -1 }}])