function Emp(id,name) {  
    this.id = id;   
    this.name = name;  
  }  
  function PermanentEmp(id,name) {  
   Emp.call(this,id,name);  
  }  
  document.writeln(new PermanentEmp(101,"John Martin").name);  