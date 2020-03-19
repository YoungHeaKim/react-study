import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styles from './stylesheet.scss';
import { Movie } from '../index';
import classNames from 'classnames/bind';
import moment from 'moment';

const cx = classNames.bind(styles);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      // movies: [
      //   {
      //     'id': 15761,
      //     'title': 'Sidelined',
      //     'year': 2018,
      //     'runtime': 40,
      //     'genres': [
      //       'Documentary',
      //     ],
      //     'summary': 'NFL Cheerleaders find themselves embroiled in controversy and constant media coverage after they pose for Playboy magazine in 1978.',
      //     'description_full': 'NFL Cheerleaders find themselves embroiled in controversy and constant media coverage after they pose for Playboy magazine in 1978.',
      //     'background_image': 'https://yts.mx/assets/images/movies/sidelined_2018/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/sidelined_2018/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/sidelined_2018/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/sidelined_2018/medium-cover.jpg',
      //   },
      //   {
      //     'id': 15757,
      //     'title': 'Impossible Monsters',
      //     'year': 2019,
      //     'runtime': 84,
      //     'genres': [
      //       'Thriller',
      //     ],
      //     'summary': 'An ambitious professor becomes caught up in the murder of a participant in his sleep study, as the lines between dreams and reality blur.',
      //     'description_full': 'An ambitious professor becomes caught up in the murder of a participant in his sleep study, as the lines between dreams and reality blur.',
      //     'background_image': 'https://yts.mx/assets/images/movies/impossible_monsters_2019/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/impossible_monsters_2019/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/impossible_monsters_2019/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/impossible_monsters_2019/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/impossible_monsters_2019/large-cover.jpg',
      //   },
      //   {
      //     'id': 15755,
      //     'title': 'Brotherhood',
      //     'year': 2019,
      //     'runtime': 96,
      //     'genres': [
      //       'Drama',
      //     ],
      //     'summary': 'In 1926, a band of teenage boys arrive at Long Point Camp for the adventure of their lives. When their canoe capsizes in a freak summer storm, their holiday descends into a soul-shuddering fight for survival.',
      //     'description_full': 'In 1926, a band of teenage boys arrive at Long Point Camp for the adventure of their lives. When their canoe capsizes in a freak summer storm, their holiday descends into a soul-shuddering fight for survival.',
      //     'background_image': 'https://yts.mx/assets/images/movies/brotherhood_2019/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/brotherhood_2019/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/brotherhood_2019/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/brotherhood_2019/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/brotherhood_2019/large-cover.jpg',
      //   },
      //   {
      //     'id': 15754,
      //     'title': 'A Night at the Opera',
      //     'year': 1935,
      //     'runtime': 96,
      //     'genres': [
      //       'Comedy',
      //       'Music',
      //       'Musical',
      //     ],
      //     'summary': 'The Marx Brothers take on high society. Two lovers who are both in opera are prevented from being together by the man\'s lack of acceptance as an operatic tenor. Pulling several typical Marx Brothers\' stunts, they arrange for the normal tenor to be absent so that the young lover can get his chance.',
      //     'description_full': 'The Marx Brothers take on high society. Two lovers who are both in opera are prevented from being together by the man\'s lack of acceptance as an operatic tenor. Pulling several typical Marx Brothers\' stunts, they arrange for the normal tenor to be absent so that the young lover can get his chance.',
      //     'background_image': 'https://yts.mx/assets/images/movies/a_night_at_the_opera_1935/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/a_night_at_the_opera_1935/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/a_night_at_the_opera_1935/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/a_night_at_the_opera_1935/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/a_night_at_the_opera_1935/large-cover.jpg',
      //   },
      //   {
      //     'id': 15753,
      //     'title': 'The Dare',
      //     'year': 2019,
      //     'runtime': 97,
      //     'genres': [
      //       'Horror',
      //       'Mystery',
      //       'Thriller',
      //     ],
      //     'summary': 'A rare family night takes a brutal twist when a workoholic father awakens in a basement with 3 other prisoners. As their vengeful captor runs riot, the father engages in a twisted battle to solve the puzzle to his past and save his family\'s future.',
      //     'description_full': 'A rare family night takes a brutal twist when a workoholic father awakens in a basement with 3 other prisoners. As their vengeful captor runs riot, the father engages in a twisted battle to solve the puzzle to his past and save his family\'s future.',
      //     'background_image': 'https://yts.mx/assets/images/movies/the_dare_2019/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/the_dare_2019/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/the_dare_2019/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/the_dare_2019/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/the_dare_2019/large-cover.jpg',
      //   },
      //   {
      //     'id': 15752,
      //     'url': 'https://yts.mx/movie/a-hidden-life-2019',
      //     'title': 'A Hidden Life',
      //     'year': 2019,
      //     'runtime': 174,
      //     'genres': [
      //       'Biography',
      //       'Drama',
      //       'Romance',
      //       'War',
      //     ],
      //     'summary': 'Based on real events, A HIDDEN LIFE is the story of an unsung hero, Bl. Franz Jägerstätter, who refused to fight for the Nazis in World War II. When the Austrian peasant farmer is faced with the threat of execution for treason, it is his unwavering faith and his love for his wife, Fani, and children that keeps his spirit alive.',
      //     'description_full': 'Based on real events, A HIDDEN LIFE is the story of an unsung hero, Bl. Franz Jägerstätter, who refused to fight for the Nazis in World War II. When the Austrian peasant farmer is faced with the threat of execution for treason, it is his unwavering faith and his love for his wife, Fani, and children that keeps his spirit alive.',
      //     'background_image': 'https://yts.mx/assets/images/movies/a_hidden_life_2019/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/a_hidden_life_2019/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/a_hidden_life_2019/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/a_hidden_life_2019/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/a_hidden_life_2019/large-cover.jpg',
      //   },
      //   {
      //     'id': 15751,
      //     'title': 'Richard Jewell',
      //     'year': 2019,
      //     'runtime': 131,
      //     'genres': [
      //       'Biography',
      //       'Crime',
      //       'Drama',
      //     ],
      //     'summary': 'American security guard Richard Jewell saves thousands of lives from an exploding bomb at the 1996 Olympics, but is vilified by journalists and the press who falsely reported that he was a terrorist.',
      //     'description_full': 'American security guard Richard Jewell saves thousands of lives from an exploding bomb at the 1996 Olympics, but is vilified by journalists and the press who falsely reported that he was a terrorist.',
      //     'background_image': 'https://yts.mx/assets/images/movies/richard_jewell_2019/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/richard_jewell_2019/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/richard_jewell_2019/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/richard_jewell_2019/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/richard_jewell_2019/large-cover.jpg',
      //   },
      //   {
      //     'id': 15748,
      //     'title': 'Port of Call',
      //     'year': 2015,
      //     'runtime': 126,
      //     'genres': [
      //       'Crime',
      //       'Drama',
      //       'Mystery',
      //       'Thriller',
      //     ],
      //     'summary': 'Human nature begins where truth ends Welcome to the murder without a body',
      //     'description_full': 'Human nature begins where truth ends Welcome to the murder without a body',
      //     'background_image': 'https://yts.mx/assets/images/movies/port_of_call_2015/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/port_of_call_2015/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/port_of_call_2015/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/port_of_call_2015/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/port_of_call_2015/large-cover.jpg',
      //   },
      //   {
      //     'id': 15747,
      //     'title': 'Freezer',
      //     'year': 2014,
      //     'runtime': 83,
      //     'genres': [
      //       'Action',
      //       'Thriller',
      //     ],
      //     'summary': 'Robert is an ordinary man who is faced with extraordinary circumstances. He is locked in a meat freezer by Russian thugs who believe that he owes them 8 million dollars. Robert, who is in every frame of the film soon discovers that he is not alone in the freezer. Sam, a stranger, is also locked in with him, and it becomes a struggle to survive the cold and the forces that are against them.',
      //     'description_full': 'Robert is an ordinary man who is faced with extraordinary circumstances. He is locked in a meat freezer by Russian thugs who believe that he owes them 8 million dollars. Robert, who is in every frame of the film soon discovers that he is not alone in the freezer. Sam, a stranger, is also locked in with him, and it becomes a struggle to survive the cold and the forces that are against them.',
      //     'background_image': 'https://yts.mx/assets/images/movies/freezer_2014/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/freezer_2014/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/freezer_2014/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/freezer_2014/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/freezer_2014/large-cover.jpg',
      //   },
      //   {
      //     'id': 15746,
      //     'title': 'Balibo',
      //     'year': 2009,
      //     'runtime': 0,
      //     'genres': [
      //       'Drama',
      //       'Mystery',
      //       'Thriller',
      //     ],
      //     'summary': 'As Indonesia prepares to invade the tiny nation of East Timor, five Australian based journalists go missing. Four weeks later, veteran foreign correspondent Roger East is lured to East Timor by the young and charismatic José Ramos-Horta to tell the story of his country and investigate the fate of the missing men. As East\'s determination to uncover the truth grows, the threat of invasion intensifies and an unlikely friendship develops between the last foreign correspondent in East Timor and the man who will become President. BALIBO is a political thriller that tells the true story of crimes that have been covered up for over thirty years.',
      //     'description_full': 'As Indonesia prepares to invade the tiny nation of East Timor, five Australian based journalists go missing. Four weeks later, veteran foreign correspondent Roger East is lured to East Timor by the young and charismatic José Ramos-Horta to tell the story of his country and investigate the fate of the missing men. As East\'s determination to uncover the truth grows, the threat of invasion intensifies and an unlikely friendship develops between the last foreign correspondent in East Timor and the man who will become President. BALIBO is a political thriller that tells the true story of crimes that have been covered up for over thirty years.',
      //     'background_image': 'https://yts.mx/assets/images/movies/balibo_2009/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/balibo_2009/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/balibo_2009/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/balibo_2009/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/balibo_2009/large-cover.jpg',
      //   },
      //   {
      //     'id': 15745,
      //     'title': 'The Alligator People',
      //     'year': 1959,
      //     'runtime': 74,
      //     'genres': [
      //       'Horror',
      //       'Mystery',
      //       'Sci-Fi',
      //     ],
      //     'summary': 'A newlywed couple sit in a train. The husband receives a frantic telegram. He gets off at a station to make a phone call, the train pulls away without him on it, and that\'s the last his wife sees of him. Years later after a long search she finally tracks him down on his family\'s southern estate where she discovers that a failed medical treatment has turned him into an alligator mutant.',
      //     'description_full': 'A newlywed couple sit in a train. The husband receives a frantic telegram. He gets off at a station to make a phone call, the train pulls away without him on it, and that\'s the last his wife sees of him. Years later after a long search she finally tracks him down on his family\'s southern estate where she discovers that a failed medical treatment has turned him into an alligator mutant.',
      //     'background_image': 'https://yts.mx/assets/images/movies/the_alligator_people_1959/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/the_alligator_people_1959/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/the_alligator_people_1959/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/the_alligator_people_1959/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/the_alligator_people_1959/large-cover.jpg',
      //   },
      //   {
      //     'id': 15744,
      //     'title': 'The Last Big Save',
      //     'year': 2019,
      //     'runtime': 76,
      //     'genres': [
      //       'Drama',
      //     ],
      //     'summary': 'A professional hockey player who is only happy when he is miserable signs a long-term contract that covers his entire career only to ruin it in his first year due to substance abuse and alcoholism. He rides his good luck in the final month of the final year of his contract when he gets a last chance at redemption in the seventh game of the finals.',
      //     'description_full': 'A professional hockey player who is only happy when he is miserable signs a long-term contract that covers his entire career only to ruin it in his first year due to substance abuse and alcoholism. He rides his good luck in the final month of the final year of his contract when he gets a last chance at redemption in the seventh game of the finals.',
      //     'background_image': 'https://yts.mx/assets/images/movies/the_last_big_save_2019/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/the_last_big_save_2019/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/the_last_big_save_2019/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/the_last_big_save_2019/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/the_last_big_save_2019/large-cover.jpg',
      //   },
      //   {
      //     'id': 15743,
      //     'title': 'Tanner Hall',
      //     'year': 2009,
      //     'runtime': 96,
      //     'genres': [
      //       'Drama',
      //       'Romance',
      //     ],
      //     'summary': 'Tanner Hall is a vivid peek into the private world of an all-girls boarding school. In a cozy, but run-down New England, the knot of adolescent complexity is unraveled through the coming-of-age stories of four teenage girls.',
      //     'description_full': 'Tanner Hall is a vivid peek into the private world of an all-girls boarding school. In a cozy, but run-down New England, the knot of adolescent complexity is unraveled through the coming-of-age stories of four teenage girls.',
      //     'background_image': 'https://yts.mx/assets/images/movies/tanner_hall_2009/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/tanner_hall_2009/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/tanner_hall_2009/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/tanner_hall_2009/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/tanner_hall_2009/large-cover.jpg',
      //   },
      //   {
      //     'id': 15742,
      //     'title': 'Results',
      //     'year': 2015,
      //     'runtime': 105,
      //     'genres': [
      //       'Comedy',
      //       'Romance',
      //     ],
      //     'summary': 'The healthy living philosophies of an ultra-positive gym owner, Trevor, played by Guy Pearce, is tested against his employee Kat\'s more pragmatic approach, played by Cobie Smulders. It doesn\'t help that the two have slept together and he harbours lingering feelings for her. Her unresolved anger threatens to ruin the gym\'s relationship with a wealthy new client, Danny, played by Kevin Corrigan. Matters are further jeopardized when Trevor, trying to smooth the situation, gives way to his own emotions instead. In spite of their best efforts, neither is able to truly move on. The business risk Trevor is in too deep to back away from and the uncertainty of something more with Kat threatens to profoundly impact both their lives.',
      //     'description_full': 'The healthy living philosophies of an ultra-positive gym owner, Trevor, played by Guy Pearce, is tested against his employee Kat\'s more pragmatic approach, played by Cobie Smulders. It doesn\'t help that the two have slept together and he harbours lingering feelings for her. Her unresolved anger threatens to ruin the gym\'s relationship with a wealthy new client, Danny, played by Kevin Corrigan. Matters are further jeopardized when Trevor, trying to smooth the situation, gives way to his own emotions instead. In spite of their best efforts, neither is able to truly move on. The business risk Trevor is in too deep to back away from and the uncertainty of something more with Kat threatens to profoundly impact both their lives.',
      //     'background_image': 'https://yts.mx/assets/images/movies/results_2015/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/results_2015/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/results_2015/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/results_2015/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/results_2015/large-cover.jpg',
      //   },
      //   {
      //     'id': 15741,
      //     'title': 'Just for the Hell of It',
      //     'year': 1968,
      //     'runtime': 81,
      //     'genres': [
      //       'Drama',
      //       'Thriller',
      //     ],
      //     'summary': 'A teenage gang led by the vicious Dexter; his girlfriend Mitzi; and friends Denny and Lummonx; create havoc in a small Florida town by harassing various people, vandalizing property, well... just for the hell of it. When a former gang member, Doug, tries to prevent their ever increasing violent antics, Denny takes it upon himself and a few loyal members of the gang to target Doug\'s girlfriend, Jeanne, to make him back off.',
      //     'description_full': 'A teenage gang led by the vicious Dexter; his girlfriend Mitzi; and friends Denny and Lummonx; create havoc in a small Florida town by harassing various people, vandalizing property, well... just for the hell of it. When a former gang member, Doug, tries to prevent their ever increasing violent antics, Denny takes it upon himself and a few loyal members of the gang to target Doug\'s girlfriend, Jeanne, to make him back off.',
      //     'background_image': 'https://yts.mx/assets/images/movies/just_for_the_hell_of_it_1968/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/just_for_the_hell_of_it_1968/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/just_for_the_hell_of_it_1968/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/just_for_the_hell_of_it_1968/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/just_for_the_hell_of_it_1968/large-cover.jpg',
      //   },
      //   {
      //     'id': 15740,
      //     'title': 'Hex',
      //     'year': 1980,
      //     'runtime': 94,
      //     'genres': [
      //       'Crime',
      //       'Fantasy',
      //       'Horror',
      //       'Thriller',
      //     ],
      //     'summary': 'A man who believes that he has murdered his wife, sees her return as a vengeful ghost.',
      //     'description_full': 'A man who believes that he has murdered his wife, sees her return as a vengeful ghost.',
      //     'background_image': 'https://yts.mx/assets/images/movies/hex_1980/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/hex_1980/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/hex_1980/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/hex_1980/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/hex_1980/large-cover.jpg',
      //   },
      //   {
      //     'id': 15739,
      //     'title': 'Anatomy of a Love Seen',
      //     'year': 2014,
      //     'runtime': 80,
      //     'genres': [
      //       'Drama',
      //       'Romance',
      //     ],
      //     'summary': 'Exploring love, in all its painful and messy glory. Six months ago actresses Zoe and Mal fell for each other at exactly the same moment in time while filming a love scene. After five blissful months together, Zoe was decimated when Mal walked away. Three miserable weeks later, a very lucrative network broadcast deal was in the works. They only had one request: Re-shoot the love scene. Welcome to the set.',
      //     'description_full': 'Exploring love, in all its painful and messy glory. Six months ago actresses Zoe and Mal fell for each other at exactly the same moment in time while filming a love scene. After five blissful months together, Zoe was decimated when Mal walked away. Three miserable weeks later, a very lucrative network broadcast deal was in the works. They only had one request: Re-shoot the love scene. Welcome to the set.',
      //     'background_image': 'https://yts.mx/assets/images/movies/anatomy_of_a_love_seen_2014/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/anatomy_of_a_love_seen_2014/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/anatomy_of_a_love_seen_2014/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/anatomy_of_a_love_seen_2014/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/anatomy_of_a_love_seen_2014/large-cover.jpg',
      //   },
      //   {
      //     'id': 15738,
      //     'title': 'Zarafa',
      //     'year': 2012,
      //     'runtime': 78,
      //     'genres': [
      //       'Adventure',
      //       'Animation',
      //       'Family',
      //     ],
      //     'summary': 'The plot of the film has a grandfather telling his grand kids the story of Maki, a young boy who escapes from slave traders, befriends a giraffe (the title character), cross the desert, meet a pirate, and a few other things on a trip that takes him from Africa to Paris.',
      //     'description_full': 'The plot of the film has a grandfather telling his grand kids the story of Maki, a young boy who escapes from slave traders, befriends a giraffe (the title character), cross the desert, meet a pirate, and a few other things on a trip that takes him from Africa to Paris.',
      //     'background_image': 'https://yts.mx/assets/images/movies/zarafa_2012/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/zarafa_2012/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/zarafa_2012/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/zarafa_2012/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/zarafa_2012/large-cover.jpg',
      //   },
      //   {
      //     'id': 15737,
      //     'title': 'The Stranglers of Bombay',
      //     'year': 1959,
      //     'runtime': 80,
      //     'genres': [
      //       'Action',
      //       'Adventure',
      //       'History',
      //       'Horror',
      //     ],
      //     'summary': 'A murderous religious cult is way-laying travellers and stealing goods in nineteenth century India. As the disappearances mount and trade becomes difficult, the British East India Company is forced to act. But they give the job to an upper-class officer completely out-of-touch with the country rather than the obvious candidate who has been in India for years and well understands the people and culture.',
      //     'description_full': 'A murderous religious cult is way-laying travellers and stealing goods in nineteenth century India. As the disappearances mount and trade becomes difficult, the British East India Company is forced to act. But they give the job to an upper-class officer completely out-of-touch with the country rather than the obvious candidate who has been in India for years and well understands the people and culture.',
      //     'background_image': 'https://yts.mx/assets/images/movies/the_stranglers_of_bombay_1959/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/the_stranglers_of_bombay_1959/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/the_stranglers_of_bombay_1959/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/the_stranglers_of_bombay_1959/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/the_stranglers_of_bombay_1959/large-cover.jpg',
      //   },
      //   {
      //     'id': 15736,
      //     'title': 'The Camp on Blood Island',
      //     'year': 1958,
      //     'runtime': 0,
      //     'genres': [
      //       'Action',
      //       'Drama',
      //       'History',
      //       'War',
      //     ],
      //     'summary': 'Deep in Malaya, as World War II is rapidly coming to an end, men, women and children, trapped by the Japanese invasion, are held captive in the Blood Island prison camp. Knowing that Yamamitsu, the sadistic commandant, will murder them all when he learns of his country\'s defeat, Dutch, a Dutch planter, smashes the camp radio. British officer Lambert and, in the women\'s prison, the recently-widowed Kate, join Dutch in arming the prisoners.',
      //     'description_full': 'Deep in Malaya, as World War II is rapidly coming to an end, men, women and children, trapped by the Japanese invasion, are held captive in the Blood Island prison camp. Knowing that Yamamitsu, the sadistic commandant, will murder them all when he learns of his country\'s defeat, Dutch, a Dutch planter, smashes the camp radio. British officer Lambert and, in the women\'s prison, the recently-widowed Kate, join Dutch in arming the prisoners.',
      //     'background_image': 'https://yts.mx/assets/images/movies/the_camp_on_blood_island_1958/background.jpg',
      //     'background_image_original': 'https://yts.mx/assets/images/movies/the_camp_on_blood_island_1958/background.jpg',
      //     'small_cover_image': 'https://yts.mx/assets/images/movies/the_camp_on_blood_island_1958/small-cover.jpg',
      //     'medium_cover_image': 'https://yts.mx/assets/images/movies/the_camp_on_blood_island_1958/medium-cover.jpg',
      //     'large_cover_image': 'https://yts.mx/assets/images/movies/the_camp_on_blood_island_1958/large-cover.jpg',
      //   },
      // ],
      movies: [],
    };
  };

  getMovies = async () => {
    let today = moment().subtract(1, 'days').format('YYYYMMDD');
    const { data: { boxOfficeResult: { dailyBoxOfficeList: movies } } } = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=${today}`);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    const { movies } = this.state;
    if (movies.length === 0) this.getMovies();
  }

  render() {
    const { movies, isLoading } = this.state;
    const { className } = this.props;

    return (
      <div className={cx('homeDiv', className)}>
        {
          isLoading ? 'Loading...' :
            <div className='InnerDiv'>
              <h1 className='headerTitle'>영화 리스트</h1>
              <ul className='listMovie'>
                {
                  movies.length !== 0 && movies.map((movie, i) =>
                    <li className='movieWrap' key={i}>
                      <Movie movie={movie}/>
                    </li>,
                  )
                }
              </ul>
            </div>
        }
      </div>
    );
  }
}

export default withRouter(Home);
