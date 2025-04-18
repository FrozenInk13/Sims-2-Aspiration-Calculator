Thank you for taking in interest in my project! I did this for-fun during college while I was taking a class on Javascript. For reference, my coding knowledge consists of one class of Python, one class of a combo of HTML and CSS, and two to three weeks of JavaScript. I have also made one for-fun project in Python. (a boss randomizer for Hollow Knight) I have no other coding knowledge at the time of both writing this and making this code.

This project in total took me about two weeks to complete from start to finish. I got the idea for this from just looking through how to community decided what Sim gets what Aspirations. I really didn't want to have to come up with every single Aspiration all by myself, (partially due to laziness, partially due to me knowing that if I did that all my Sims would end up having the same two to three Apspirations) but I also didn't like how the Zodiac Sign method made it impossible to have, say for example, a shy Romance Sim. I had also heard about the method taking into account all of a Sim's Interests, but I didn't like that too well since it sounded like far too much work just for one little thing.

Taking all of this into account, I decided to just say "frick it" and made my own Aspiration-deciding method. After coming up with my method, my laziness kicked in once I realized I would have to do this to every Sim upon starting the neighborhood for the first time since I had no idea what Secondary Aspirations to give the majority of the Pleasantview Premade Sims, so I decided to create a Python file to do the calculations for me. Only after I finished that did I decide to turn that into a website, with that website being the finished result. I'm fairly happy with the result, despite the colors not being the best. Graphic design is ~not~ my passion, if you could tell. I hope it's still useable!

~~ ~~

In case you're curious about what calculations are actually taking place, then look down below. All six main Aspirations will either gain or lose points based on their relations with their parents, their parent's Aspirations, their Personality, their top two and lowest ranked Interests, and their Zodiac Sign. The Zodiac Sign is still taken into account because that is dependent on the Sim's Personality as a whole, which I think is still important to keep track of.

~

   ~ Parents ~
If the Sim has a good relationship (friends or better) with their first parent, (Mother or some equivilent) then:
+2 Points toward the Aspiration that matches that parent's Primary Aspiration
+1 Points toward the Aspiration that matches that parent's Secondary Aspiration

Same thing as above but for their second parent. (Father or some equivilent)

Do note that when I say "parent", not only do I mean it in a gender-neutral context, but I also don't mean "birth parent". The "parent" being referred to here are that Sim's parents of choice, not their biological parent. So for example, if a child is the result of a Woohoo between Sim A and Sim B, but Sim A and Sim C are the ones to raise them, then that child will use Sim A and Sim C for this calculation, completely ignoring Sim B's existence even if they have a good relationship with them. Think of the "Parents" calculation category as the new-Teen looking to potentially aspire to be similar people to the ones they are closest to upon becoming a Teen rather than people they might not even know exist.

   ~ Personality ~
For each Personality Row, perform the following calculation:
   1. If the number of points the Sim has in that Personality Row is less than 5, then take the absolute value of the number of points in that row subtracted by 5. In other words, you are finding the distance between 5 and the number of points your Sim has in that row.
   2. If the number of points the Sim has in that Personality Row is greater than 5, then you just subtract it by 5.
   3. If the number of points the Sim has in that Personality Row is equal to 5, then you skip that Personality Row and move to the next one. If that's the last Personality Row, (typically will be Grouchy/Nice) then you move on to the next section for calculation.

After that, then look at which side of each Personality Row your points lean on and add points associated with that. For the following, let the calculated points (or calc_points) be the number of points calculated from the above section for each respective Personality Row. Also let ceil(calc_points / 2) mean to take the calculated points, divide it by two, then take the ceiling of that value. (round to the next-highest whole number)
~ Sloppy: + calc_points Pleasure, + ceil(calc_points / 2) Romance
~ Neat: + calc_points Family, + ceil(calc_points / 2) Knowledge

~ Shy: + calc_points Knowledge, + ceil(calc_points / 2) Pleasure
~ Outgoing: + calc_points Popularity, + ceil(calc_points / 2) Fortune

~ Lazy: + calc_points Pleasure, ceil(calc_points / 2) Knowledge
~ Active: + calc_points Family, ceil(calc_points / 2) Popularity

~ Serious: + calc_points Fortune, + ceil(calc_points / 2) Popularity
~ Playful: + calc_points Romance, + ceil(calc_points / 2) Family

~ Grouchy: + calc_points Knowledge, + ceil(calc_points / 2) Fortune
~ Nice: + calc_points Popularity, + ceil(calc_points / 2) Romance

If you want them without the calculations, then here's the simple table:
~ Sloppy: Pleasure, Romance
~ Neat: Family, Knowledge

~ Shy: Knowledge, Pleasure
~ Outgoing: Popularity, Fortune

~ Lazy: Pleasure, Knowledge
~ Active: Family, Popularity

~ Serious: Fortune, Popularity
~ Playful: Romance, Family

~ Grouchy: Knowledge, Fortune
~ Nice: Popularity, Romance

   ~ Zodiac ~
+ 2 Points to the Aspiration that matches the Zodiac Sign the Sim has.

I just copy and pasted the list of Zodiacs from somewhere. I can't for the life of you tell you where I got it from or why specific Zodiac Signs get assigned to specific Aspirations, but I do have the list below if you're curious.
~ Family: Aquarius & Cancer
~ Fortune: Sagittarius & Scorpio
~ Knowledge: Pisces & Taurus
~ Pleasure: Capricorn & Taurus
~ Popularity: Gemini & Leo
~ Romance: Aries & Libra

   ~ Interests ~
For the Interests which are the highest, second highest, and lowest ranked Interests on that Sim, points are either added or subtracted from their matching Aspiration. Specifically, they are scored as shown below:
+ 3 Points for the matching Aspiration of the highest-ranked Interest
+ 2 Points for the matching Aspiration of the second highest-ranked Interest
- 2 Points for the matching Aspiration of the lowest-ranked Interest

As for the Aspirations which match each Interest, I have a custom list for that too, which is shown below:
~ Family: Environment, Health, Toys
~ Fortune: Crime, Money, Work
~ Knowledge: Paranormal, School, Sci-fi
~ Pleasure: Animals, Entertainment, Food
~ Popularity: Politics, Sports, Travel
~ Romance: Culture, Fashion, Weather

~~ ~~

As for the Jealousy calculations, that's a bit more complex than you might think. It is completely random, and every result is possible to achieve regardless of what Aspirations you got as a result.

So, what does it do? First of all, it generates a random number between 0 and 19. It then checks to see what Primary and Secondary Aspirations have been calculated before matching them with a set of results, finding the Jealousy Level from that. In case you're curious of all the possibilities, then that is shown below. Do remember that the Jealousy Levels is still completely random.

~ Primary: Romance, Secondary: Family
45% - No Jealousy / Polyamorous
25% - Married Only
20% - Engaged / Steady
10% - In Love

~ Primary: Romance, Secondary: NOT Family
60% - No Jealousy / Polyamorous
25% - Married Only
10% - Engaged / Steady
5% - In Love

~ Primary: Family, Secondary: Romance
10% - No Jealousy / Polyamorous
20% - Married Only
45% - Engaged / Steady
25% - In Love

~ Primary: Family, Secondary: NOT Romance
5% - No Jealousy / Polyamorous
10% - Married Only
55% - Engaged / Steady
30% - In Love

~ Primary: NOT Family or Romance, Secondary: Romance
25% - No Jealousy / Polyamorous
30% - Married Only
30% - Engaged / Steady
15% - In Love

~ Primary: NOT Family or Romance, Secondary: Family
10% - No Jealousy / Polyamorous
15% - Married Only
50% - Engaged / Steady
25% - In Love

~ Primary: NOT Family or Romance, Secondary: NOT Family or Romance
10% - No Jealousy / Polyamorous
30% - Married Only
40% - Engaged / Steady
20% - In Love
