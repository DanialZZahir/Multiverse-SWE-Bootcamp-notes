// & ---------------- OBJECTS ----------------

// ^ below is how you create an object

const nameofobject = {
    property1: valueofproperty1,
    property2: valueofproperty2,
    property3: valueofproperty3,

}

// ~ Now, you can add methods INSIDE your object, see below.

const nameofobject = {
    property1: valueofproperty1,
    property2: valueofproperty2,                                        
    property3: valueofproperty3,
    
    
    nameofmethod1 () {
        return valueofproperty1 * valueofproperty2                      // <----- Method 1  
    },                                                                 
                                                                
    nameofmethod2 () {                                                 
        return (2 * (valueofproperty1 + valueofproperty2));             // <----- Method 2
    }                                                                   
}


// * it's the exact same object, just with methods inside.
// * the first method (nameofmethod2) calculates the valueofproperty1 multiplied by the valueofproperty2
    // ? REAL-LIFE EXAMPLE --> this could be used to calculate area, if your object (nameofobject) was a rectangle etc.

// * methods use the values of the properties to calculate an output

// & fun fact: methods are just regular functions, the only difference is that methods are declared INSIDE objects.
