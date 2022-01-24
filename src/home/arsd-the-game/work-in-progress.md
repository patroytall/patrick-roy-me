
aRSD - a Reason To Sing and Dance
Work in Progress






Share


Game Variants
Created by Patrick Roy
Last updated: May 15, 2016 min read2 people viewed2 people viewed
The variants described in this text are rough ideas. They have not been validated with enough play testing. Use at your own risk.

Pool game aRSD
The pool game aRSD variant is designed for social pool game playing. The fun master plays song while teams are playing the regular pool game, for example 8-balls. Instead of earning points with good answers, the players earn extra shots in the pool game. The extra shots must be used as soon as possible. The fun master decides when to stop and start the songs. A good approach is to let the songs play completely.

Car aRSD
Pronounced word and letter in order: 'car', 's', 'd'. While playing ARSD in a car, it is better to relax some of the game flow rules to make the game more casual. For example:
players just say the primary answer with an optional secondary answer instead of indicating they want to give an answer with a sound or gesture
players keep count of their score themselves without the fun master stating points and making gestures
the fun master can play the game with the players if the song display can be hiden while songs are starting

Chill aRSD
Player lay down on a couches and comfortable setting for a relaxe game session of aRSD. The normal criteria of energy defining P, S, and T lists does not apply. More slower songs can be used. Tokens like dices can be thrown gently at the players for points.

One for all
You can have more than two teams playing at the same time. For example, in a Chill variant with four people and four teams thus one person per team. When a counter answer is required, it is up to the team to the right clock wise. Counter primary answers can keep going until a correct primary answer is given. When a player looses point, every other team gets a point. If a player drops out, his points are given to the next correct primary answer.





Artist and Theme Song Lists Addition
Created by Patrick Roy
Last updated: May 15, 2016 min read1 person viewed1 person viewed
Artist and theme song lists is a major addition to the game.

an artist song list is constituted of multiple songs from the same artist
a theme song list is a group of songs around a single theme
The game flow for artist and theme song lists does not require speedy answers.

At fixed points in the game, a team picks an artist list. A simple scheme is the first time a team reaches 10, 20, 30 points, they get to pick an artist or theme song list.

Any given artist song set can only be picked once during a game session. Any given theme song list can only be picked twice during a game session.

Five songs from the selected artist or theme song set alternate between the two teams. The team who picked the list gets the first of the five thus has two advantages: three songs instead of two and the strategic advantage of choosing. 

Artist Song List
Each team has one minute to guess the title of a song from a song set but only before its title name has been said in the playing song. When a team fails to give a correct answer, the other can give a counter answer. The fun master will try to stop the song before the title is sang for counter answers. Points for each song are -1 for an incorrect answer and +1 for a correct. While the song is playing, the fun master can warn the players the title is about to be played.

Theme Song List
Played like normal aRSD songs.

List of Names of Song Lists
The fun master must give the players a list of names for the artist and them song lists so they can be chosen. A simple scheme is to print the list of names so the players can mark the ones that have been chosen.


Challenges
Created by Patrick Roy
Last updated: May 15, 2016 min read2 people viewed2 people viewed
Each team is given three challenge tokens. For example: poker chips. The tokens can be used at the beginning of a turn before the song starts step to initiate a challenge. Only one team can initiate a challenge for given song start. If both teams request it, then the first one to have requested it gets it. The fun master takes the token of the team who requested the challenge. The team must choose a song list to be used for the challenge. The team who did not request the challenge is now challenged. The challenged team plays one song from the chosen song list using the artist and theme song list addition rules. The points for the song are doubled, both positive and negative. A per usual rule, if no primary answer is given, a counter answer is available to the team who requested the challenge.

Challenges are an opportunity for a team trailing behind in points to challenge the other team in a play list that they are not good at so the team gets a counter answer to score double points. Because the general rules give an advantage to the team trailing in points, it is better to use challenges toward the end of a match.


Word
Created by Patrick Roy
Last updated: Apr 22, 2017 min read2 people viewed2 people viewed

Nicola Ciccone - Opera du mendiant: bouche, nez, oreille

Loco Locass - Liberez nous des liberaux: prince, reine, roi

Alan Walker - Faded: later, now, soon

Blondie - Call Me: curve, line, round

Gnarls Barkley - Crazy: once, third, twice, 

Diana Ross - Upside Down: cheating, lying, stealing

Gilles Valiquette - Je suis cool: astronaut, police, , pompier, 

Ozzy Osbourne - Crazy Train: billion, million, thousand

Vance Joy - Riptide: LA, New York, Paris, 

Laurie Darmon - Rupture: future, passe, present

Toni Basil - Mickey: long, short, wide

The Weeknd - Can't feel my face: birth, death, life

Mes Aieux - Desgenerations: chantant, dansant, pleurant,

Black Sabath - Paranoid: brain, guts, heart

Jean-Leloup - Natalie: un, deux, trois

Michael Sembello - Maniac: closing, Locking, opening





aRSD - a Reason To Sing and Dance
Fun Master Guide






Share


Structured Song List Names
Created by Patrick Roy
Last updated: May 15, 2016 min read2 people viewed2 people viewed
The content of this text is intended for fun masters who want to publish or obtain public aRSD song lists.

Structured Song List Names
Song list names are structure so they can be shared. Follow the grammar rules of this note to create names which will be easy to share between people who do not know each other. Feel free to rename a list to a more friendly name in your private collection.

Grammar Conventions:
Grammar characters:

::= : symbol definition
<> : sequence of symbols to be repeated
[] : zero or one occurence of the enclosed symbols sequence
+ : one or more occurrences of the preceding symbol
* : 0 or more occurrences of the previous symbol or sequence
# : any number terminal symbol
| : logical or, left or right symbol
... : more of the same
other characters are terminal symbols
SongListName ::= ListType[ListSubType]_ListName_[Attributes][_Author]

ListType ::= p | s | t
ListSubType ::= m
Attributes ::= <_Attribute>+
Attribute ::= OriginA | LanguagesA | CategoryA | BirthYearDecadeA
OriginA ::= LowerName<-LowerName>*(o)
LanguagesA ::= Language[-Language]
Language ::= LanguageList(l)
LanguageList ::= english | french | spanish | ...
BirthYearDecadeA ::= BirthYearDecade(b)
BirthYearDecade ::= 19## | 20##
CategoryA ::= Category(c)
Category ::= rap | dance | pop | metal | ...
ListName ::= Name
Author ::= LowerName
LowerName ::= lower case letters
Name ::= 1 or mor,e lower or upper case, letter or number. Word separation should be marked with upper case letter. Example: GreatGrammarToEnjoy.
Attributes
Attributes must appear in the order listed in <Attribute>.

Example
Example: pm_FriendlyRap_canada-qc(o)_english(l)_rap(s)_1990(b)_ards