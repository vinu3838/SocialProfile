var SocialProfile = /** @class */ (function () {
    function SocialProfile(name, birthday, profilePhotoUrl, coverPhotoUrl, timeLinepost, quote) {
        var _this = this;
        this.ChangeProfilePhoto = function (NewUrl) {
            _this.profilePhotoUrl = NewUrl;
        };
        this.AddTimeLinePost = function (timeLinepost) {
            _this.timeLinepost.push(timeLinepost);
        };
        this.ViewProfile = function () {
            var info = [_this.name, _this.birthday, _this.profilePhotoUrl, _this.coverPhotoUrl,
                _this.timeLinepost, _this.like, _this.pagesLiked, _this.quote];
            return info;
        };
        this.AddLike = function (timeLinepost) {
            for (var _i in _this.timeLinepost) {
                if (_this.timeLinepost[_i] == timeLinepost) {
                    if (_this.like[_i] == null) {
                        _this.like[_i] = 0;
                    }
                    _this.like[_i]++;
                }
            }
        };
        this.AddPagesLiked = function (pageName) {
            _this.pagesLiked.push(pageName);
        };
        this.AddFriends = function (Friends) {
            for (var _j in Friends) {
                _this.friendList.push(Friends[_j]);
            }
        };
        this.EditQoute = function (newQuote) {
            _this.quote = newQuote;
        };
        this.ViewFriends = function () {
            return _this.friendList;
        };
        this.name = name;
        this.birthday = birthday;
        this.profilePhotoUrl = profilePhotoUrl;
        this.coverPhotoUrl = coverPhotoUrl;
        this.timeLinepost = timeLinepost;
        this.like = [];
        this.pagesLiked = [];
        this.friendList = [];
        this.quote = quote;
    }
    return SocialProfile;
}());
var Vinu = new SocialProfile('Vinu', '03/08/1193', 'vinu.jpg', 'cover.jpg', ['hello'], "All the Best");
console.log(Vinu.AddTimeLinePost('bye'));
Vinu.EditQoute("All is Well");
Vinu.AddLike("hello");
Vinu.AddLike("bye");
Vinu.AddLike("bye");
Vinu.AddPagesLiked("Subway surfer");
Vinu.AddPagesLiked("Mobiles");
Vinu.AddFriends(["Salman", "Abdul", "Thomas"]);
console.log("SocialProfile looks like this \n " + Vinu.ViewProfile());
console.log("Friends List \n " + Vinu.ViewFriends());
