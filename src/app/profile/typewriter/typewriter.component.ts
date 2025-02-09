import { Component, OnInit } from '@angular/core';

//@ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {

  ngOnInit(): void {
    const target = document.querySelector(".myIntrotw");
    const target_1 = document.querySelector(".intro_1");

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    })

    writer
      .changeCursorColor('white')
      .type('Software Engineer.')
      .rest(500)
      .changeOps({ deleteSpeed: 10 })
      .remove(18)
      .type('Full-Stack Developer.')
      .rest(500)
      .changeOps({ deleteSpeed: 10 })
      .remove(23)
      .type('4+ Years in TCS as a Full Stack Software Engineer.')
      .rest(500)
      .changeOps({ deleteSpeed: 10 })
      .remove(50)
      .type('I strive to learn something new everyday.')
      .rest(500)
      .clear()
      .start()
    
    /* writer
      .type('A simple syntax makes it easy.')
      .rest(500)
      .start() */

    /* const writer_1 = new Typewriter(target_1, {
      loop: true,
      typeColor: 'white'
    })
    
    writer_1
      .type('Hello!!')
      .rest(500)
      .start() */
  }
}
