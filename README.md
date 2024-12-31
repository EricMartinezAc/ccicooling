# ccicooling
machine learning system for cooling plant
this app is a microservices backend for ml
create a main app js for test


# endpoints

- PRODUCTS

* /api/ms/products/loginProduct
body {owner: string, clav_prodct: string}
return {id:string, stat:boolean}

* /api/ms/products/findProduct
body {_id: string}
return {owner:string, stat:boolean}