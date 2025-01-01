/* eslint-disable react/no-unescaped-entities */
import { Line } from "./Line"

export function About() {

    const age = new Date().getFullYear() - 2004;

    return (
        <section id="about" className="flex flex-col gap-5">
            <Line className="border-t border-gray-500 " />
            <h2 className="font-suisse font-bold text-center text-2xl tracking-wide ">About Me</h2>
            <p className="font-thin text-xl">Hello, My name is Lázaro, I am {age} years old, I'm an ADS (System Analysis and Development) student. My passion is being able to solve real problems based on my knowledge in Web Development.</p>

            <p className="font-thin text-xl">Solving a problem, or an emerging need, in the face of current difficulties, makes Solves Problems required for the challenge.</p>

            <p className="font-thin text-xl">I started my career in programming, at the exact moment I saw the magic behind technological solutions, yeah..., I had no idea how all that was possible.</p>

            <p className="font-thin text-xl">However, even without knowing how it was done, I always wanted to be part of it, as a 13-year-old boy who didn't know how to turn on a computer, I wanted to be a programmer!</p>

            <p className="font-thin text-xl">Today, I have dedicated myself daily to transforming problems into solutions, bringing ideas into the world, presenting them, without shyness, but with a very clear objective. Be useful to someone.</p>
        </section>
    )
}