function getCharacter() {
    return {
      firstname: 'Frodo',
      name: 'Baggins',
    };
  }
  
  type Character = ReturnType<typeof getCharacter>;
  
  /*
  
  equal to 
  
  type Character = {
    firstname: string;
    name: string;
  }
  
  */
  