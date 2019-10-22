const mongoose = require('mongoose')
let Schema=mongoose.Schema

const subscriptionSchema=new Schema({
    user_id: {type: String},
    plan_id: {type: String},
    quantity: {type: Number},
    status: {type: String},
    razorpay_id: {type: String},
    c_ts: Date,
    u_ts: Date
})

const SUBSCRIPTION_MODEL_NAME='Subscription'
const COLLECTION_NAME='subscriptions'
const Subscription=mongoose.model(SUBSCRIPTION_MODEL_NAME,subscriptionSchema,COLLECTION_NAME)
module.exports=Subscription