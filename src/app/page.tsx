'use client'

import { useState } from "react"
import { useSpring, animated, config } from '@react-spring/web'
import { getAllUs } from "../lib/u_utils";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Scrolling/>
      <hr/>
      <h1>ṻ</h1>
      <p>ṵṷṹṻụủứừ⒰υṳ</p>
      <hr/>
      <h1>ự</h1>
      <p>ỤỦỨỪỬῢΰῦṺṴUὺ</p>
      <hr/>
      <h1>Ṹ</h1>
      <p>ῧuṲỮỰṶṸύῠῡ</p>
      <hr/>
      <h1>ὺ</h1>
      <p>ửữựὐὑὒὓὔὕὖὗ</p>
      <hr/>
    <Scrolling/>
    </main>
    </div>
  );
}


function Scrolling() {
  const [flip, set] = useState(false)

  const words = getAllUs().split("");

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return (
    <animated.div
      style={{
        position: 'relative',
        //width: '100%',
        height: 60,
        overflow: 'hidden',
        fontSize: '2.5em',
      }}
      scrollTop={scroll}>
      {words.map((word, i) => (
        <div
          key={`${word}_${i}`}
          style={{  height: 50, textAlign: 'center' }}>
          {word}
        </div>
      ))}
    </animated.div>
  )
}