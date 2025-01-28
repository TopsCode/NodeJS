var website = {  
    name: "Javatpoint",  
    getName: function() {  
      return this.name;  
    }  
  }  
  var unboundGetName = website.getName;  
  var boundGetName = unboundGetName.bind(website);  
  document.writeln(boundGetName());  