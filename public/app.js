const { response } = require("express");
//const document=require('document')
const jsdom = require("jsdom");
const fetch=require('node-fetch')
const form=document.querySelector('form')
console.log('client side script')
const address= document.getElementsByTagName('input')

var para1 = document.querySelector('#m1');
var para2 = document.querySelector('#m2');
var para3 = document.querySelector('#m3');
var para4 = document.querySelector('#m4');



form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const address1=address.value
        para1.textContent= 'Loding....'
        para2.textContent=''
        para3.textContent=''
        para4.textContent=''

fetch('http://localhost:3000/weather?search=' +address1).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
           para1.textContent=data.error
        }
        para1.textContent= data.location_name
        para2.textContent=data.latitude
        para3.textContent=data.longitude
        para4.textContent=data.Weather_Report
        console.log(data)

    })})
    

//paragraph2.textContent()
})
