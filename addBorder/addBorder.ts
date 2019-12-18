function addBorder(picture: string[]): string[] {
    const lengthOfWall = picture[0].length + 2;
    let horizontalBorder = '';
    for(let i = 0; i < lengthOfWall; i++) {
        horizontalBorder += '*';
    };
    for(let i = 0; i < picture.length; i++){
        picture[i] = '*' + picture[i];
        picture[i] += '*';
    }
        
    picture.push(horizontalBorder);
    picture.unshift(horizontalBorder);
    return picture;
}

console.log(addBorder(["abc", "ded"]));