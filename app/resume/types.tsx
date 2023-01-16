export interface Job {
  achievements: Achievement[];
  company: string;
  description: Achievement[];
  logo: Logo;
  period: string;
  skills: string[];
  title: string;
}

export interface Achievement {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
}

export interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface Logo {
  asset: Asset;
}

export interface Asset {
  url: string;
}
