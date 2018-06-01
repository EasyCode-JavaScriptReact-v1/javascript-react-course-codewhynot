let name = 'Ilon';
let surname = 'Mask';
let phones = ['+380939999999','+380999999999','+380679999999'];
let socials = ['telegram', 'whatsapp','viber','facebook']
let position = 1;
let image = 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg';
let callLimit = Infinity;
let status = true;
let copy = Math.sqrt(-1);
let gender = 'man';
let organisation = undefined;
let history = [
    {
        callDate: '31.05.2018',
        callTime: '11:15',
        callDirection: 'Incoming',
        callDuration: 2
    },
    {
        callDate: '31.05.2018',
        callTime: '17:11',
        callDirection: 'Incoming',
        callDuration: 12
    },
    {
        callDate: '01.06.2018',
        callTime: '14:00',
        callDirection: 'Outgoing',
        callDuration: 18
    },
    {
        callDate: '01.06.2018',
        callTime: '14:18',
        callDirection: 'Outgoing',
        callDuration: 5
    },
    {
        callDate: '01.06.2018',
        callTime: '16:23',
        callDirection: 'Incoming',
        callDuration: 12
    },
]

const userCard = {
    userPosition: position,
    userName: name,
    userSurname: surname,
    userPhoto: image,
    userGender: gender,
    userOrganisation: organisation,
    userPhones: {},
    userSocials: {},
    userCallHistory: {},
    userFavoriteStatus: status,
    userCallLimit: callLimit,
    userRingTone: null,
    userCardDuplicate: copy,
    userParsInfo: function(obj,prop){
        for(let i = 0; i < prop.length; i++){
            obj[i] = prop[i]
        }
    }
}
userCard.userParsInfo(userCard.userPhones,phones)
userCard.userParsInfo(userCard.userSocials,socials)
userCard.userParsInfo(userCard.userCallHistory,history)


console.log(userCard)
