osc(35, 0.006, 0)
  .modulate(
    noise(3, 0.025),
    0.22
  )
  .mult(
    osc(28, -0.005, 1.2)
      .rotate(1.2)
      .modulate(noise(2, 0.02), 0.2)
  )
  .modulate(
    noise(5, 0.015),
    0.15
  )
  .contrast(0.45)
  .colorama(0.08)
  .saturate(0.4)
  .brightness(0.4)
  .out(o0)
