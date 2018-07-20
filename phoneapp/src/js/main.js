let users = [
    {
        name: 'Алое',
        surname: 'Вера',
        phoneNumber: '+380934026963',
        userImage: 'src/img/aloe.jpg'
    },
    {
        name: 'Вася',
        surname: 'Пупкин',
        phoneNumber: '+380950012233',
        userImage: 'src/img/vasya.jpeg'
    },
    {
        name: 'Игорь',
        surname: 'Странный',
        phoneNumber: '+380501234567',
        userImage: 'src/img/strange.jpg'
    },
    {
        name: 'Петя',
        surname: 'Злобный',
        phoneNumber: '+380633216598',
        userImage: 'src/img/crazy.jpg'
    },
    {
        name: 'Ира',
        surname: 'Веселая',
        phoneNumber: '+380937418523',
        userImage: 'src/img/smile.jpg'
    }

]

class TableGenerator {
    constructor(data){
        this.table = document.querySelector('.contact_grid');
        this.data = data;
        this.result = []
        this.generate();
    }
    add(param){
        return document.createElement(param);
    }
    generate(){
        this.data.forEach((val,i,arr) => {
            //Items=====================================
            let item = this.add('li');
            let itemImageWrap = this.add('div');
            let itemImage = this.add('img');
            let itemInfoWrap = this.add('div');
            let itemInfoUser = this.add('div');
            let itemInfoUserSurname = this.add('span');
            let itemInfoUserName = this.add('span');
            let itemInfoNumber = this.add('div');
            let itemEditWrap = this.add('div');
            let itemEditLink = this.add('a');
            let itemEditIcon = this.add('span');
            //Class=========================================

            item.className = 'contact_item';
            itemImageWrap.className = 'contact_image';
            itemInfoWrap.className = 'contact_info';
            itemInfoUser.className = 'user';
            itemInfoUserSurname.className = 'surname';
            itemInfoUserName.className = 'name';
            itemInfoNumber.className = 'number';
            itemEditWrap.className = 'contact_edit';
            itemEditIcon.className = 'icon-edit';

            //Content========================================

            itemInfoUserSurname.textContent = val.surname;
            itemInfoUserName.textContent = val.name;
            itemInfoNumber.textContent = val.phoneNumber;
            itemEditLink.setAttribute('href','edit.html');
            itemImage.setAttribute('src', val.userImage);
            //Add=============================================
            itemEditLink.appendChild(itemEditIcon);
            itemEditWrap.appendChild(itemEditLink);
            itemInfoUser.appendChild(itemInfoUserSurname);
            itemInfoUser.appendChild(itemInfoUserName);
            itemInfoWrap.appendChild(itemInfoUser);
            itemInfoWrap.appendChild(itemInfoNumber);
            itemImageWrap.appendChild(itemImage);
            item.appendChild(itemImageWrap);
            item.appendChild(itemInfoWrap);
            item.appendChild(itemEditWrap);

            this.result.push(item);
        })
    }
    render (){
        if(!this.table) return
        this.result.forEach(val => this.table.appendChild(val))
    }
}

let newTable = new TableGenerator(users);

newTable.render();