const csv = `name,character,bge,skill1,skill1Value,skill2,skill2Value,skill3,skill3Value,rarity,attack,health,imgSource
Greande Amy,Amy,Armed,Payback,27,heal,30,Leech,27,Legendary,0,0,-
Ray Gun Rifle Amy,Amy,Armed,Bodyguard,27,Sturdy,26,Criple,31,Legendary,0,0,-
Whale Hunter Amy,Amy,Armed,Punch,27,Jab,30,Bomb,22,Legendary,0,0,-
Assassin Bender,Bender,Armed,Bomb,19,Leech,30,Crazed,19,Legendary,0,0,-
Bender's Weapons,Bender,Armed,Shield All BGE,11,Bomb,15,-,0,Legendary,0,0,-
Flame Belcher Bender,Bender,Armed,Enlarge,15,Cripple,30,Gas,27,Legendary,0,0,-
Sleighing Tonight,Bender,Armed,Sturdy,17,Shield BGE,15,Cheer All BGE,8,Legendary,0,0,-
Space Pistol Bender,Bender,Armed,Sturdy,22,Bodyguard,19,Bomb,19,Legendary,0,0,-
Bill's Vegetable Knife,Bill,Armed,Bunker,14,Hijack,19,Jab,34,Legendary,0,0,-
Paintball Bill,Bill,Armed,Recover,40,Cripple,31,Gas,38,Mythic,0,0,-
$300 Knife,Bob,Armed,Cripple,22,Jab,22,Crazed,13,Legendary,0,0,-
Bacon Weight,Bob,Armed,Sturdy,26,Hijack,20,Gas,32,Mythic,0,0,-
Mustache Gun,Bob,Armed,Shield All BGE,8,Punch,16,-,0,Legendary,0,0,-
RC Helicopter,Bob,Armed,Bodyguard,21,Shield All BGE,16,-,0,Mythic,0,0,-
Cut Down Christmas Tree,Bobby,Armed,Heal All Show,13,Punch,22,-,0,Legendary,0,0,-
Egg vs Tornado,Bobby,Armed,Payback,23,Hijack,15,Bomb,18,Mythic,0,0,-
Garden Shovel Bobby,Bobby,Armed,Motivate,20,Sturdy,11,Bodyguard,19,Mythic,0,0,-
Sharpshooter Bobby,Bobby,Armed,Recover,18,Punch,28,Jab,19,Legendary,0,0,-
Hatchet Boomhauer,Boomhauer,Armed,Hijack,20,Jab,33,Crazed,19,Mythic,0,0,-
Paintball Boomhauer,Boomhauer,Armed,Burn,16,Bunker,16,Gas,27,Legendary,0,0,-
Laser Tag Brian,Brian,Armed,Motivate,20,Burn,17,Leech,36,Mythic,0,0,-
Private Brian,Brian,Armed,Shield All BGE,17,Punch,26,Bomb,14,Legendary,0,0,-
Sidearm Brian,Brian,Armed,Sturdy,26,Punch,28,-,0,Mythic,0,0,-
Finger Cutter,Bullock,Armed,Cripple,22,Crazed,13,Gas,22,Legendary,0,0,-
Rocket Launcher Bullock,Bullock,Armed,Jab,36,Bomb,21,Punch,26,Legendary,0,0,-
Knifelight,Cheryl Tunt,Armed,Bunker,29,Crazed,26,Gas,32,Mythic,0,0,-
Chris' Pimple,Chris,Armed,Recover,20,Hijack,16,Cripple All,12,Legendary,0,0,-
Screwdrive Chris,Chris,Armed,Sturdy,26,Shield All,11,Crazed,17,Mythic,0,0,-
Battle Cry Cleveland,Cleveland Brown,Armed,Cheer All BGE,24,Cripple All,21,Bomb,34,Mythic,0,0,-
Ankle Gun Cotton,Cotton,Armed,Payback,29,Cheer All,15,Gas,36,Legendary,0,0,-
Bayonet Cotton,Cotton,Armed,Enlarge,22,Jab,35,Bomb,14,Mythic,0,0,-
Dale to the Rescue,Dale,Armed,Heal,36,Shield,24,-,0,Mythic,0,0,-
Gun Club President,Dale,Armed,Punch,24,Leech,17,-,0,Legendary,0,0,-
Paintball Dale,Dale,Armed,Bodyguard,19,Leech,29,Gas,26,Legendary,0,0,-
Pocket Sand,Dale,Armed,Cripple,18,Gas,21,-,0,Legendary,0,0,-
Sledgehammer Dale,Dale,Armed,Punch,27,Jab,32,Bomb,19,Mythic,0,0,-
Traumatized Dale,Dale,Armed,Payback,26,Cheer,34,Punch,31,Mythic,0,0,-
Claw-Plach,Dr. Zoidberg,Armed,Jab,24,Crazed,14,-,0,Legendary,0,0,-
Sniper Zoidberg,Dr. Zoidberg,Armed,Payback,26,Punch,23,Jab,28,Mythic,0,0,-
Becky,Francine,Armed,Heal All BGE,15,Cripple,29,-,0,Mythic,0,0,-
Derringer Francine,Francine,Armed,Bodyguard,19,Heal BGE,26,Crazed,14,Legendary,0,0,-
Elf Fight Francine,Francine,Armed,Sturdy,20,Punch,25,Jab,36,Mythic,0,0,-
Sword Fighter Francine,Francine,Armed,Recover,0,Gas,0,-,0,None,0,0,-
Congo Jack,Fry,Armed,Recover,22,Cripple,18,Jab,29,Legendary,0,0,-
Freezer Burn,Fry,Armed,Heal All BGE,10,Cripple,24,Gas,27,Legendary,0,0,-
Positron Shooter Fry,Fry,Armed,Heal BGE,25,Hijack,17,Leech,32,Legendary,0,0,-
Space Pistol Fry,Fry,Armed,Burn,20,Cripple,31,Leech,28,Mythic,0,0,-
Mixer Bat,Gayle Genarro,Armed,Sturdy,32,Recover,26,Hijack,20,Mythic,0,0,-
Self Defense Spray,Gayle Genarro,Armed,Burn,0,Cripple All,0,Gas,0,None,0,0,-
Balloon Sniper,Gene,Armed,Boost,15,Heal Show,20,Punch,17,Legendary,0,0,-
Bleakened Gene,Gene,Armed,Sturdy,19,Enlarge,22,Cheer All BGE,14,Legendary,0,0,-
Fart in a Jar,Gene,Armed,Sturdy,18,Cripple All,12,Gas,29,Mythic,0,0,-
Sled Armor Gene,Gene,Armed,Bunker,20,Punch,30,Crazed,20,Legendary,0,0,-
Chainsaw Hank,Hank,Armed,Payback,24,Crazed,14,Gas,26,Legendary,0,0,-
Hose to the Head,Hank,Armed,Boost,17,Heal BGE,21,Bomb,11,Legendary,0,0,-
Paintball Hank,Hank,Armed,Sturdy,24,Heal,27,Shield All,11,Mythic,0,0,-
Plastic Bat Hank,Hank,Armed,Burn,30,Bunker,23,Enlarge,23,Legendary,0,0,-
Traumatized Hank,Hank,Armed,Payback,25,Bomb,19,-,0,Legendary,0,0,-
Let's Get Nuts,Hayley,Armed,Recover,29,Boost,26,Bomb,23,Mythic,0,0,-
Santa Killer Hayley,Hayley,Armed,Motivate BGE,18,Bodyguard,25,Payback,22,Legendary,0,0,-
Chest Harpoon,Hermes,Armed,Cheer All Show,10,Leech,22,-,0,Legendary,0,0,-
Upgraded Hermes,Hermes,Armed,Sturdy,16,Bodyguard,19,Cripple,24,Legendary,0,0,-
Butcher Knife Jeff,Jeff,Armed,Cheer,27,Cripple All,17,Leech,27,Mythic,0,0,-
Firecracker Jeff,Jeff,Armed,Cripple All,13,Bomb,21,Crazed,13,Legendary,0,0,-
Balloon Tosser,Jimmy Jr.,Armed,Heal,26,Bomb,18,Crazed,26,Legendary,0,0,-
Holster Handgun Joe,Joe Swanson,Armed,Jab,33,Leech,33,Gas,28,Legendary,0,0,-
Laser Tag Joe,Joe Swanson,Armed,Sturdy,29,Bodyguard,21,Cripple All,12,Legendary,0,0,-
Jungle Machete,Kif Kroker,Armed,Boost,27,Hijack,29,Jab,24,Legendary,0,0,-
Bounty Hunter Lana,Lana,Armed,Motivate,22,Enlarge,22,Hijack,31,Mythic,0,0,-
Spray and Pray,Lana,Armed,Cheer,27,Cheer All,13,Jab,25,Legendary,0,0,-
Leela's Harpoon,Leela,Armed,Cheer All BGE,15,Punch,22,Jab,30,Legendary,0,0,-
Penguin Conservator,Leela,Armed,Punch,30,Jab,29,-,0,Legendary,0,0,-
Water Gun Leela,Leela,Armed,Bunker,21,Bomb,32,Crazed,18,Legendary,0,0,-
Whale Killer,Leela,Armed,Recover,30,Boost,28,Leech,38,Mythic,0,0,-
Cake Knife,Linda Belcher,Armed,Cripple,33,Jab,29,Gas,32,Legendary,0,0,-
Knife Sharpener Linda,Linda Belcher,Armed,Motivate,20,Jab,32,Crazed,15,Legendary,0,0,-
Laser Razor,Linda Belcher,Armed,Punch,26,Crazed,17,-,0,Legendary,0,0,-
Ravenous Porcelain Babies,Linda Belcher,Armed,Payback,23,Bomb,15,Crazed,15,Mythic,0,0,-
Rambo Lois,Lois,Armed,Recover,24,Punch,26,-,0,Legendary,0,0,-
Reflection,Lois,Armed,Motivate,19,Payback,33,Heal,33,Legendary,0,0,-
Victorian Knife Lois,Lois,Armed,Payback,22,Jab,31,Crazed,9,Mythic,0,0,-
Balloon Sniper,Louise,Armed,Boost,16,Heal Show,21,Punch,18,Legendary,0,0,-
Christmas Trap,Louise,Armed,Motivate,18,Hijack,22,Punch,26,Mythic,0,0,-
Sled Armor Louise,Louise,Armed,Boost,28,Heal,28,Cheer,34,Legendary,0,0,-
Sower of Revenge,Louise,Armed,Recover,19,Cripple,21,Gas,23,Legendary,0,0,-
Biathelon Meg,Meg,Armed,Sturdy,17,Heal,30,Punch,25,Mythic,0,0,-
Prison Meg,Meg,Armed,Cripple All,17,-,0,-,0,Mythic,0,0,-
Zit Popper Meg,Meg,Armed,Sturdy,18,Bomb,13,-,0,Legendary,0,0,-
Destroyer Mort,Mort,Armed,Jab,0,Bomb,0,Crazed,0,None,0,0,-
The Mortian,Mort,Armed,Sturdy,27,Payback,33,Cheer,33,Mythic,0,0,-
Space Tank,Pam Poovey,Armed,Bunker,21,Enlarge,18,Bomb,21,Mythic,0,0,-
Battle Axe Peggy,Peggy,Armed,Heal,28,Crazed,23,-,0,Legendary,0,0,-
Garden Shovel Peggy,Peggy,Armed,Shield All BGE,16,Punch,29,Cripple All,16,Legendary,0,0,-
Paddlin' Peggy,Peggy,Armed,Punch,28,Crazed,20,-,0,Legendary,0,0,-
Rubber Knife Peggy,Peggy,Armed,Motivate,26,Bunker,20,Hijack,37,Legendary,0,0,-
Gun Safety Peter,Peter,Armed,Punch,22,Jab,16,-,0,Legendary,0,0,-
Peter with a Knife,Peter,Armed,Bodyguard,21,Bunker,19,Cripple All,13,Legendary,0,0,-
Pirate Cannon Peter,Peter,Armed,Cheer All,13,Bomb,20,Crazed,19,Mythic,0,0,-
Doomsday Surplus,Professor Farnsworth,Armed,Cripple All,16,Bomb,18,Gas,34,Legendary,0,0,-
NRA Member,Professor Farnsworth,Armed,Punch,23,Bomb,16,Gas,24,Legendary,0,0,-
Ready for Santa,Professor Farnsworth,Armed,Bodyguard,19,Recover,24,Shield All BGE,14,Legendary,0,0,-
Stabbing Farnsworth,Professor Farnsworth,Armed,Payback,32,Jab,32,Gas,29,Legendary,0,0,-
Army Quagmire,Qaugmire,Armed,Bodyguard,20,Cheer All,11,Bomb,20,Mythic,0,0,-
Giggitygun,Qaugmire,Armed,Payback,12,Punch,21,-,0,Legendary,0,0,-
Laser Tag Quagmire,Qaugmire,Armed,Enlarge,22,Heal BGE,36,Hijack,20,Mythic,0,0,-
Redneck Ray,Ray Gillette,Armed,Motivate,17,Boost,21,Bunker,17,Legendary,0,0,-
Bounty Hunter Roger,Roger,Armed,Recover,28,Enlarge,25,Heal,35,Legendary,0,0,-
Legman,Roger,Armed,Shield BGE,26,Punch,26,-,0,Legendary,0,0,-
Ricky Spanish,Roger,Armed,Payback,27,Leech,33,Gas,28,Legendary,0,0,-
Valik,Roger,Armed,Payback,0,Bomb,0,Leech,0,None,0,0,-
Kitchen Knife Snot,Snot,Armed,Jab,32,Leech,32,Gas,32,Mythic,0,0,-
Laser Tag Stan,Stan,Armed,Boost,24,Hijack,25,Leech,30,Legendary,0,0,-
Rapture Stan,Stan,Armed,Boost,14,Crazed,10,-,0,Legendary,0,0,-
Space Stan,Stan,Armed,Shield Show,26,Cripple All,11,-,0,Legendary,0,0,-
Stealth Stan,Stan,Armed,Bodyguard,26,Payback,35,Cheer All,22,Legendary,0,0,-
A Bed and Breakfast,Sterling Archer,Armed,Sturdy,30,Hijack,33,Cripple All,12,Legendary,0,0,-
Assault Dolphin,Sterling Archer,Armed,Burn,16,Punch,36,Crazed,23,Mythic,0,0,-
Santa Killer Steve,Steve,Armed,Boost,29,Punch,17,Jab,26,Legendary,0,0,-
Tranq Gun Steve,Steve,Armed,Sturdy,31,Burn,17,Jab,36,Mythic,0,0,-
Water Gun Steve,Steve,Armed,Payback,24,Punch,24,-,0,Legendary,0,0,-
Wheels Steve,Steve,Armed,Payback,31,Boost,25,Crazed,19,Legendary,0,0,-
Flamethrower Stewie,Stewie,Armed,Motivate,22,Burn,22,Cripple All,17,Legendary,0,0,-
Knife Fight Stewie,Stewie,Armed,Hijack,18,Cripple,33,Crazed,26,Mythic,0,0,-
Laser Gun Stewie,Stewie,Armed,Punch,21,Jab,27,Gas,23,Legendary,0,0,-
Santa Stewie,Stewie,Armed,Cheer All,8,Crazed,11,-,0,Legendary,0,0,-
Sniper Stewie,Stewie,Armed,Hijack,19,Punch,25,-,0,Legendary,0,0,-
Chainsaw Spider,Teddy,Armed,Burn,14,Bunker,14,Crazed,20,Mythic,0,0,-
Fresh Start,Teddy,Armed,Boost,14,Heal,20,-,0,Epic,0,0,-
Hammer Olympian,Teddy,Armed,Recover,19,Punch,23,Crazed,15,Legendary,0,0,-
Shark Killer,Teddy,Armed,Motivate,21,Cripple All,18,Leech,40,Mythic,0,0,-
Ballon Fight,Tina,Armed,Boost,28,Punch,31,Bomb,19,Legendary,0,0,-
Grill Cook,Tina,Armed,Heal Show,19,Bomb,13,-,0,Legendary,0,0,-
Sled Armor Tina,Tina,Armed,Enlarge,21,Shield All BGE,19,Cripple All,19,Legendary,0,0,-
Army Tank Zapp,Zapp Brannigan,Armed,Bomb,16,Crazed,22,Gas,29,Legendary,0,0,-
Bomb Detanator Zapp,Zapp Brannigan,Armed,Hijack,0,Punch,0,Bomb,0,None,0,0,-
Unsharp Scissors Zapp,Zapp Brannigan,Armed,Punch,36,Jab,39,Crazed,18,Mythic,0,0,-`;