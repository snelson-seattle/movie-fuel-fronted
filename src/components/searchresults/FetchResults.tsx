interface query{
    text:string | null,
    language:string | null,
    page:number | null
}
interface resultItem {
    adult: boolean,
    backdrop_path: string | null,
    genre_ids: number[] | number,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
function FetchResults(props:any):resultItem[]{
    return(
         [
          {
            "adult": false,
            "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
            "genre_ids": [
              35,
              12,
              14
            ],
            "id": 346698,
            "original_language": "en",
            "original_title": "Barbie",
            "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
            "popularity": 988.258,
            "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
            "release_date": "2023-07-19",
            "title": "Barbie",
            "video": false,
            "vote_average": 7.241,
            "vote_count": 5408
          },
          {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
              35
            ],
            "id": 617932,
            "original_language": "en",
            "original_title": "Barbie",
            "overview": "Barbie comes home from shopping. She takes her groceries out of the bag and unwraps a little Barbie doll. She fries up the Barbie doll and eats it.",
            "popularity": 3.007,
            "poster_path": "/A1NvddoqyBjaIfEHDaffIJFGxcM.jpg",
            "release_date": "1977-01-01",
            "title": "Barbie",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 22
          },
          {
            "adult": false,
            "backdrop_path": "/v5xXTpfMT5NpjQeDMNYNLflaiuA.jpg",
            "genre_ids": [
              16,
              10751
            ],
            "id": 13002,
            "original_language": "en",
            "original_title": "Barbie in the 12 Dancing Princesses",
            "overview": "King Randolph sends for his cousin, Duchess Rowena, to help turn his daughters, Princess Genevieve and her eleven sisters, into royal material. But the Duchess strips the sisters of their fun, including their favorite pastime: dancing. When all hope may be lost, the sisters discover a secret passageway to a magical land where they can dance the night away.",
            "popularity": 34.848,
            "poster_path": "/yBB7PwXRFJ29U8m8SnTcWVizFvM.jpg",
            "release_date": "2006-09-19",
            "title": "Barbie in The 12 Dancing Princesses",
            "video": false,
            "vote_average": 7.651,
            "vote_count": 1062
          },
          {
            "adult": false,
            "backdrop_path": "/QAL6ZI2mLEXiIUGhGYd1fYuj9Q.jpg",
            "genre_ids": [
              16,
              10751
            ],
            "id": 16418,
            "original_language": "en",
            "original_title": "Barbie Presents: Thumbelina",
            "overview": "Meet a tiny girl named Thumbelina who lives in harmony with nature in the magical world of the Twillerbees that's hidden among the wildflowers. At the whim of a spoiled young girl named Makena, Thumbelina and her two friends have their patch of wildflowers uprooted and are transported to a lavish apartment in the city.",
            "popularity": 23.706,
            "poster_path": "/ytKd2jWnzWLCiccutqqMNzcP5RE.jpg",
            "release_date": "2009-02-24",
            "title": "Barbie Presents: Thumbelina",
            "video": false,
            "vote_average": 6.613,
            "vote_count": 453
          },
          {
            "adult": false,
            "backdrop_path": "/hbvCZ12HiC6Dx4mbgeUr7aHBIPP.jpg",
            "genre_ids": [
              16,
              10751,
              12,
              14
            ],
            "id": 13285,
            "original_language": "en",
            "original_title": "Barbie Fairytopia: Mermaidia",
            "overview": "In this animated follow-up to Fairytopia, Elina enlists the help of a mermaid, Nori, to save her friend Nalu, a merman prince who has been captured by the wicked Laverna.",
            "popularity": 30.764,
            "poster_path": "/igsqS7rpnkAT92Iqo5sYwTs1KWo.jpg",
            "release_date": "2006-03-14",
            "title": "Barbie: Fairytopia - Mermaidia",
            "video": false,
            "vote_average": 6.855,
            "vote_count": 644
          },
          {
            "adult": false,
            "backdrop_path": "/jhigHpoxLDxpjUUuBOCVmAo8ntb.jpg",
            "genre_ids": [
              16,
              10751
            ],
            "id": 13459,
            "original_language": "en",
            "original_title": "Barbie in 'A Christmas Carol'",
            "overview": "On Christmas Eve, Kelly is reluctant to go to a Christmas Eve ball, so Barbie tells her the story of Eden Starling, a glamorous singing diva in the Victorian England and the owner of a theatre house. However, Eden is self-centered and loves only herself. She is frequently accompanied by her snooty cat, Chuzzlewit. She does not believe in Christmas and orders all her employees to work on Christmas.",
            "popularity": 24.071,
            "poster_path": "/fX9g1AE1JIqjX3LPPKVjcmHs6fd.jpg",
            "release_date": "2008-11-03",
            "title": "Barbie in A Christmas Carol",
            "video": false,
            "vote_average": 7.042,
            "vote_count": 495
          },
          {
            "adult": false,
            "backdrop_path": "/bTU64xL4uToTjQZwICPZzMb4yZt.jpg",
            "genre_ids": [
              28,
              16,
              10751
            ],
            "id": 377897,
            "original_language": "en",
            "original_title": "Barbie: Spy Squad",
            "overview": "Barbie and her best friends Teresa and Renee transform from hard-working gymnasts to undercover secret agents. When their amazing gymnastics skills catch the eye of a top-secret spy agency, the girls are soon following clues to a gem-stealing cat burglar, using high-tech gadgets, glam disguises and cute robo-pets to save the day.",
            "popularity": 27.131,
            "poster_path": "/uxdvJHE5V844dTlK2EmqRQCTYDb.jpg",
            "release_date": "2016-01-15",
            "title": "Barbie: Spy Squad",
            "video": false,
            "vote_average": 6.958,
            "vote_count": 367
          },
          {
            "adult": false,
            "backdrop_path": "/3hXfpoMjcQqhSRipdOBzMCunMaR.jpg",
            "genre_ids": [
              10751,
              16
            ],
            "id": 343948,
            "original_language": "en",
            "original_title": "Sing Along with Barbie",
            "overview": "Sing, dance and dream with Barbie and friends in her very first collection of sing-along songs from Barbie Entertainment. Easy-to-follow, on-screen lyrics let you perform your favorite Barbie songs like never before. Relive the adventure and magic from classic Barbie movie moments through twelve memorable melodies.",
            "popularity": 60.576,
            "poster_path": "/xXnWbABqm7pEHS4hCdm8AY7FciK.jpg",
            "release_date": "2009-11-10",
            "title": "Sing Along with Barbie",
            "video": true,
            "vote_average": 6.857,
            "vote_count": 7
          },
          {
            "adult": false,
            "backdrop_path": "/xxJz6UTAP8IFezhglDtzcfK7rTp.jpg",
            "genre_ids": [
              10751,
              16
            ],
            "id": 1165223,
            "original_language": "en",
            "original_title": "My First Barbie: Happy DreamDay",
            "overview": "Sing along with Barbie, Barbie, Teresa, and Renee in this musical adventure as they plan the biggest surprise birthday party ever for Barbie’s sister, Chelsea.",
            "popularity": 150.914,
            "poster_path": "/zUGDo9luTIyiVfPVEmKGa55pIJa.jpg",
            "release_date": "2023-02-13",
            "title": "My First Barbie: Happy DreamDay",
            "video": false,
            "vote_average": 6.542,
            "vote_count": 12
          },
          {
            "adult": false,
            "backdrop_path": "/7bo9Q8HiMYN8P9EU3sdbkSuCsLD.jpg",
            "genre_ids": [
              35,
              10749
            ],
            "id": 34564,
            "original_language": "en",
            "original_title": "The Shrimp on the Barbie",
            "overview": "Carlos has failed in show-biz and currently works as a waiter in a Mexican restaurant. There he meets Alex and dumb footballer Bruce celebrating their engagement with her parents. Alex' father is less than thrilled of her fiancée and says he'd rather accept anybody else. Eventually Alex hires Carlos to present him as her new fiancée.",
            "popularity": 4.078,
            "poster_path": "/8UnWJss37wVLTVj4fTzKyv3Mrbp.jpg",
            "release_date": "1990-08-31",
            "title": "The Shrimp on the Barbie",
            "video": false,
            "vote_average": 6.207,
            "vote_count": 27
          },
          {
            "adult": false,
            "backdrop_path": "/ijfPu1IaDjy1PPUMh57PihHlRYf.jpg",
            "genre_ids": [
              10770,
              16,
              10402,
              12,
              878
            ],
            "id": 198884,
            "original_language": "en",
            "original_title": "Barbie and The Sensations: Rockin' Back to Earth",
            "overview": "Following their concert for world peace in outer space, Barbie and her band the Rockers are going back home. During the trip back to Earth, the band's space shuttle inadvertently enters a time warp. Upon landing at an airport, they meet Dr. Merrihew and his daughter Kim and soon learn that they have been transported back to 1959. The band then decides to go on a tour around the city alongside Kim. After a performance at Cape Canaveral, Dr. Merrihew helps Barbie and the Rockers return to their time. Back in the present, they stage a big concert in New York City, where Barbie is reunited with an adult Kim and introduced to her daughter Megan.",
            "popularity": 2.362,
            "poster_path": "/vUCqvymxUwYxp9H6jw5R5UiaeE5.jpg",
            "release_date": "1987-01-01",
            "title": "Barbie and the Sensations: Rockin' Back to Earth",
            "video": false,
            "vote_average": 7.646,
            "vote_count": 24
          },
          {
            "adult": false,
            "backdrop_path": "/iu2yI9aohZ6EnnU42dLQFdcepuZ.jpg",
            "genre_ids": [
              16,
              10751,
              35
            ],
            "id": 15165,
            "original_language": "en",
            "original_title": "Barbie as The Princess & the Pauper",
            "overview": "In her first animated musical featuring seven original songs, Barbie comes to life in this modern re-telling of a classic tale of mistaken identity and the power of friendship. Based on the story by Mark Twain.",
            "popularity": 43.038,
            "poster_path": "/xHYsUwUe4MaNc6mbNBGTkqZSnPk.jpg",
            "release_date": "2004-09-28",
            "title": "Barbie as The Princess & the Pauper",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 1366
          },
          {
            "adult": false,
            "backdrop_path": "/pR51tWHlUWUEnPUc5my9anqcDto.jpg",
            "genre_ids": [
              10751,
              16,
              14
            ],
            "id": 73456,
            "original_language": "en",
            "original_title": "Barbie: Princess Charm School",
            "overview": "Barbie stars as Blair Willows, a kind-hearted girl who is chosen to attend Princess Charm School: a magical, modern place that teaches dancing, how to have tea parties, and proper princess manners. Blair loves her classes -- as well as the helpful magical sprites and her new friends, Princesses Hadley and Isla. But when royal teacher Dame Devin discovers that Blair looks a lot like the kingdom’s missing princess, she turns Blair’s world upside down to stop her from claiming the throne. Now Blair, Hadley and Delancy must find an enchanted crown to prove Blair’s true identity in this charming and magical princess story!",
            "popularity": 40.987,
            "poster_path": "/lI2jPbssax6XX5vDqB9mTJHGzfH.jpg",
            "release_date": "2011-08-11",
            "title": "Barbie: Princess Charm School",
            "video": false,
            "vote_average": 7.448,
            "vote_count": 717
          },
          {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 1161997,
            "original_language": "en",
            "original_title": "Belas Barbies",
            "overview": "A quick intro to how does student life in Belas Artes of São Paulo works. Made for the freshmen's first week by their seniors.",
            "popularity": 1.185,
            "poster_path": "/fjVrHVHC7GJOQu0gnISTdlrcB66.jpg",
            "release_date": "",
            "title": "Beautiful Barbies",
            "video": false,
            "vote_average": 8.4,
            "vote_count": 5
          },
          {
            "adult": false,
            "backdrop_path": "/orsOF8IJByvs5CvYBFclXATTE9B.jpg",
            "genre_ids": [
              16
            ],
            "id": 1012801,
            "original_language": "en",
            "original_title": "Barbie: Mermaid Power",
            "overview": "Join Barbie “Brooklyn” Roberts, Barbie “Malibu” Roberts, and her sisters Skipper, Stacie, and Chelsea on an underwater adventure as they transform into mermaids to help save the world of Pacifica! In Barbie Mermaid Power™, Barbie and Barbie are summoned by Isla (from Dolphin Magic) to compete to be the underwater Power Keeper in a series of challenges designed to find their inner powers. Through these competitions, they discover whether they are mermaids of Earth, Air, Water, or Fire, all while making new animal and mermaid friends. In this fish-tale of friendship, adventure, and bravery, Barbie, Barbie, and family experience first-hand what it’s like to balance the worlds above and below the sea and learn a lesson in finding their inner powers along the way.",
            "popularity": 26.877,
            "poster_path": "/8qb8cLDBAWdahrtixN2mQdI6e52.jpg",
            "release_date": "2022-10-14",
            "title": "Barbie: Mermaid Power",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 61
          },
          {
            "adult": false,
            "backdrop_path": "/tonrulTmO9ZyZmsAsr5yr9ciE4c.jpg",
            "genre_ids": [
              16,
              10751
            ],
            "id": 15016,
            "original_language": "en",
            "original_title": "Barbie of Swan Lake",
            "overview": "Barbie as Odette, the young daughter of a baker, follows a unicorn into the Enchanted Forest and is transformed into a swan by an evil wizard intent on defeating the Fairy Queen.",
            "popularity": 27.206,
            "poster_path": "/sLpCLVQWTU7BI4yAL6kIFM9J3eX.jpg",
            "release_date": "2003-09-27",
            "title": "Barbie of Swan Lake",
            "video": false,
            "vote_average": 6.987,
            "vote_count": 1025
          },
          {
            "adult": false,
            "backdrop_path": "/budvUJdSNKVzEkNdoh4qa4r7Vj1.jpg",
            "genre_ids": [
              16,
              10751
            ],
            "id": 15167,
            "original_language": "en",
            "original_title": "Barbie in the Nutcracker",
            "overview": "\"Barbie\" stars as Clara in this animated retelling of the classic Christmas ballet, complete with Tchaikovsky soundtrack and ballet choreography.",
            "popularity": 32.574,
            "poster_path": "/eIkXJggVmzN4MyPgJ2kDjOy9lmQ.jpg",
            "release_date": "2001-09-30",
            "title": "Barbie in the Nutcracker",
            "video": false,
            "vote_average": 6.822,
            "vote_count": 976
          },
          {
            "adult": false,
            "backdrop_path": "/kHxnvrXaWDiOsvjR7o6qYu15p7H.jpg",
            "genre_ids": [
              16,
              10751
            ],
            "id": 15015,
            "original_language": "en",
            "original_title": "Barbie as Rapunzel",
            "overview": "Long, long ago, in a time of magic and dragons, there lived a girl named Rapunzel who had the most beautiful radiant hair the world had ever seen. But Rapunzel's life was far from wonderful. She lived as a servant to Gothel, a jealous, scheming witch who kept her hidden deep in a forbidding forest, guarded by the enormous dragon Hugo and surrounded by an enchanted glass wall. However, in a twist of fate, Rapunzel's discovery of a magic paintbrush leads her on a journey that will unravel a web of deception, bring peace to two feuding kingdoms, and ultimately lead her to love with the help of Penelope(TM), the least intimidating of dragons!",
            "popularity": 25.109,
            "poster_path": "/ysiGzuMSc0nFmmDPn9z7U7YSFYf.jpg",
            "release_date": "2002-10-01",
            "title": "Barbie as Rapunzel",
            "video": false,
            "vote_average": 7.008,
            "vote_count": 1156
          },
          {
            "adult": false,
            "backdrop_path": "/mzsUWgmfl3pYQEQ2MVLTf4ttH26.jpg",
            "genre_ids": [
              16,
              10751
            ],
            "id": 13283,
            "original_language": "en",
            "original_title": "Barbie as the Island Princess",
            "overview": "Shipwrecked as a child, Rosella (Barbie) grows up on the island under the watchful eyes of her loving animal friends. The arrival of Prince Antonio leads Rosella and her furry pals to explore civilization and ultimately save the kingdom by uncovering a secret plot.",
            "popularity": 25.715,
            "poster_path": "/oguRPUFeHt0H0wO0He4ewTseMXo.jpg",
            "release_date": "2007-09-17",
            "title": "Barbie as the Island Princess",
            "video": false,
            "vote_average": 7.215,
            "vote_count": 655
          },
          {
            "adult": false,
            "backdrop_path": "/lFNADy1elNHpUxML41Mi7JRstey.jpg",
            "genre_ids": [
              16,
              10751,
              14
            ],
            "id": 34134,
            "original_language": "en",
            "original_title": "Barbie in A Mermaid Tale",
            "overview": "Barbie stars as Merliah, a surfer who learns a shocking secret: she's a mermaid! She and her dolphin friend set out for an undersea adventure to rescue her mother, the queen of Oceana.",
            "popularity": 31.211,
            "poster_path": "/jtOlo3AaXVBnqfMeKGFrZUMPFui.jpg",
            "release_date": "2010-01-25",
            "title": "Barbie in A Mermaid Tale",
            "video": false,
            "vote_average": 7.221,
            "vote_count": 695
          }
        ]
      )
}
export default FetchResults