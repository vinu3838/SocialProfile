class SocialProfile {

    private name: string;
    private birthday: string;
    private profilePhotoUrl: string;
    private coverPhotoUrl: string;
    private timeLinepost: string[];
    private like: number[];
    private pagesLiked: string[];
    private friendList: string[];
    private quote:string;

    constructor(name: string, birthday: string, profilePhotoUrl: string, coverPhotoUrl: string,
         timeLinepost: string[],quote:string) 
    {

        this.name = name;
        this.birthday = birthday;
        this.profilePhotoUrl = profilePhotoUrl;
        this.coverPhotoUrl = coverPhotoUrl;
        this.timeLinepost = timeLinepost;
        this.like = [];
        this.pagesLiked = [];
        this.friendList = [];
        this.quote=quote;
    }


    ChangeProfilePhoto = (NewUrl: string) => {

        this.profilePhotoUrl = NewUrl;
    }


    AddTimeLinePost = (timeLinepost: string) => {
        this.timeLinepost.push(timeLinepost);
    }

    ViewProfile = () => {
        let info = [this.name, this.birthday, this.profilePhotoUrl, this.coverPhotoUrl,
        this.timeLinepost, this.like, this.pagesLiked, this.quote];
        return info;
    }

    AddLike = (timeLinepost: string) => {

        for (let _i in this.timeLinepost) {
            if (this.timeLinepost[_i] == timeLinepost) {
                if (this.like[_i] == null) {
                    this.like[_i] = 0;
                }
                this.like[_i]++;
            }

        }
    }


    AddPagesLiked = (pageName: string) => {

        this.pagesLiked.push(pageName);
    }

    AddFriends = (Friends: string[]) => {

        for (let _j in Friends) {
            this.friendList.push(Friends[_j]);
        }
    }

    EditQoute =(newQuote:string)=>
    {
      
        this.quote=newQuote;

    }

    ViewFriends = () => {
        return this.friendList;
    }


}



let Vinu = new SocialProfile('Vinu', '03/08/1193', 'vinu.jpg', 'cover.jpg', ['hello'],"All the Best");
console.log(Vinu.AddTimeLinePost('bye'));
Vinu.EditQoute("All is Well");
Vinu.AddLike("hello");
Vinu.AddLike("bye");
Vinu.AddLike("bye");
Vinu.AddPagesLiked("Subway surfer");
Vinu.AddPagesLiked("Mobiles");
Vinu.AddFriends(["Salman", "Abdul", "Thomas"]);
console.log("SocialProfile looks like this \n "+Vinu.ViewProfile());
console.log("Friends List \n "+Vinu.ViewFriends());
