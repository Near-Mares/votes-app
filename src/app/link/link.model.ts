export class Link {
  title: string;
  link: string;
  votes: number;

  constructor(
    titulo: string,
    enlace:string,
    votos?:number) {
    this.title= titulo;
    this.link= enlace;
    this.votes= votos || 0;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }

}
