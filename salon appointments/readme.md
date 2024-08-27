-> customer modal
{
    name:"",
    img:"",
    preferences:""
}

-> salon modal
{
    name:"salon name",
    location:"salon location",
    timing:"timing of salon",
    description:"",

}

salon has many services

-> service modal
{
    name:"",
    price:"",
    description:"",
    duration:""
}

-> salon staff modal
{
    name:"",
    pic:"",
    skills:"",
}


-> appointment modal
{
    customername:"",
    salonname:"",
    timing:"",
    staff:"",
    status:""
}

-> reviews modal
{
    customerId:"",
    rating:"",
    message:""
}

-> notification modal
{
    for:"customer/admin",
    
}