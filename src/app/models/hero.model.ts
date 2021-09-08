export interface Hero {
  id: number;
  name: string;
  title: string;
  tags: HeroType[];
  stats: {
    hp: number;
    armor: number;
    movespeed: number;
    attackrange: number;
    attackdamage: number;
    attackspeed: number;
  };
  icon: string;
  description: string;
  top: boolean;
}

type HeroType =
  | 'Mage'
  | 'Assassin'
  | 'Fighter'
  | 'Tank'
  | 'Marksman'
  | 'Support';
