Table user as U {
  id int [pk, increment] // auto-increment
  name varchar
  email varchar
  cpf varchar
  typeUser int
  phone varchar
  password varchar
  created_at timestamp
  updatedd_at timestamp
  
}

Table address as AD {
  id int
  user_id int
  complement varchar
  number int
  cep varchar
  city_id int
  created_at timestamp
  updatedd_at timestamp
}

Table city as CT {
  id int
  state_id int
  name varchar
  created_at timestamp
  updatedd_at timestamp
}

Table state as ST {
  id int
  name varchar
  uf varchar
  created_at timestamp
  updatedd_at timestamp
}

Table product as PT {
  id int
  category_id int
  name varchar
  price double
  image varcharc
  created_at timestamp
  updatedd_at timestamp
}

Table category as CAT {
  id int
  name varchar
  created_at timestamp
  updatedd_at timestamp
}

Table order as OR {
  id int
  user_id int
  address_id int
  date timestamp
  payment_id int
  created_at timestamp
  updatedd_at timestamp
}

Table cart as CAR {
  id int
  user_id int
  created_at timestamp
  updatedd_at timestamp
}

Table cart_product as CARP {
  id int
  cart_id int
  product_id int
  amount int
  created_at timestamp
  updatedd_at timestamp
}

Table order_product as OP {
  id int
  order_id int
  product_id int
  amount int
  price double
  created_at timestamp
  updatedd_at timestamp
}

Table payment as PAY {
  id int
  status_id int
  price double
  discount double
  final_price double
  payment_pix_id int
  payment_credit_card_id int
  created_at timestamp
  updatedd_at timestamp
}

Table status as STA {
  id int
  name varchar
  created_at timestamp
  updatedd_at timestamp
}

Table payment_pix as PP {
  id int
  code varchar
  date_payment timestamp
}

Table payment_credit_card as PCC {
  id int
  installments int
}

Ref: AD.user_id > U.id // many-to-one
Ref: CT.state_id > ST.id // many-to-one
Ref: AD.city_id > CT.id // many-to-one
Ref: PT.category_id > CAT.id // many-to-one
Ref: OR.user_id > U.id // many-to-one
Ref: OR.address_id > AD.id // many-to-one
Ref: OP.order_id > OR.id // many-to-one
Ref: OP.product_id > PT.id // many-to-one
Ref: CARP.product_id > PT.id // many-to-one
Ref: CARP.cart_id > CAR.id // many-to-one
Ref: PAY.status_id > STA.id // many-to-one
Ref: OR.payment_id > PAY.id // many-to-one
Ref: PAY.payment_pix_id > PP.id // many-to-one
Ref: PAY.payment_credit_card_id > PCC.id // many-to-one
Ref: CAR.user_id > U.id // many-to-one