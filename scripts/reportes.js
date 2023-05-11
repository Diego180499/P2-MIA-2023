1. 
db.detalle_carritos.aggregate(
    [
        {$group : 
            {_id:"$producto", productosVendidos : {$sum : 1 }}
        },
        {$limit : 10},
        {$sort : 
            { productosVendidos : -1 }
        }
    ]
)

2.

db.pedidos.aggregate([
    {
        $group:{
            _id:"$usuario",
            gananciasGeneradas:{$sum : "$ganancia"} 
        }
    },
    {
        $limit:10
    },
    {
        $sort:{gananciasGeneradas : -1}
    }
])

4.
db.pedidos.aggregate(
    [
        {
            $group : 
                {
                    _id:"$usuario",
                    productosVendidos : {$sum : 1 }
                }
        },
        {
            $limit:10
        },
        {
            $sort:{gananciasGeneradas : -1}
        }
    ]
)