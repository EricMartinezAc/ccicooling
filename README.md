# ccicooling
machine learning system for cooling plant
this app is a microservices backend for ml
create a main app js for test


# documents

- AUTH

    1. Methop POST
    2. URL: /api/sessions/login
    3. Body: {owner: string, clav_prodct: string}
    4. return: {id:string, stat:boolean, token: string}


- REGTR

    1. Method POST
    2. URL: /api/sessions/regtr
    3. Body: {_id: string}
    4. return: {owner:string, stat:boolean, token: string}