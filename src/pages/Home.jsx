import { cubecss, designtoken, utopia, everylayout, polypane, tailwind } from "../assets"


const Home = () => {
    return (
        <main className="flow ">

            {/* hero section  */}
            <header className="section spot-color-primary">
                <div className="section__inner">
                    <div class="wrapper flow region">
                        <h1>Be the browser’s mentor, not its micromanager.
                        </h1>
                        <p>Give the browser some solid rules and hints, then let it make the right decisions for the people that visit it, based on their device, connection quality and capabilities. This is how they will get a genuinely great user experience, rather than a fragmented, broken one.</p>
                        <p>This website was the focal point of a talk, <a href="https://andy-bell.co.uk/">Andy Bell</a>—the founder of <a href="https://set.studio/">Set Studio</a>—did in 2022. You can <a href="https://youtube.com/watch?v=5uhIiI9Ld5M"> watch him deliver it as a closing keynote, here</a>.</p>
                    </div>
                </div>

                <svg class="curve" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z" /></svg>

            </header>

            {/* Key Foundations & Principles */}
            <article className="region flow">
                <div className="wrapper">
                    <h2>Key Foundations & Principles</h2>
                    <ul role='list' className="grid mt-l-xl" data-rows="masonry" data-layout="50-50">
                        <li className="flow card">
                            <h3>Modern CSS with Methodologies</h3>
                            <p>Instead of brute-forcing your designs together with a CSS framework, consider opting for a CSS methodology like <a href="https://cube.fyi/">CUBE CSS</a>, <a href="http://smacss.com/">SMACSS</a> or <a href="http://getbem.com/introduction/">BEM</a> that empowers you to write flexible, portable CSS, rather than rigid, inflexible and overly-specific CSS.
                            </p>
                        </li>

                        <li className="flow card">
                            <h3>Fluid type & Space</h3>
                            <p>Creating type scales that respond to the viewport, rather than setting explicit values for typography and space allows you to set rules once and forget about them, knowing that whatever device, regardless of its available size will be presented with appropriate sizes.
                            </p>
                        </li>
                        <li className="flow card">
                            <h3>Flexible Layouts</h3>
                            <p>Using flexible, flexbox-based layouts, like the ones we provide in Every Layout, ensures that regardless of conditions—be it content or available screen size: your front-end will be able to respond in the most appropriate way. Giving browsers hints and space to do what they do best, helps your front-end handle tricky scenarios where breakpoint-based layouts consistently fail.
                            </p>
                        </li>
                        <li className="flow card">
                            <h3>Progressive Enhancement</h3>
                            <p>Building up with the lowest possible technological solution and enhancing it where device capability, connection speeds and context conditions allow, helps you build for everyone, not just the minority of people that have fast connections and powerful devices that work well, all the time.
                            </p>
                            <p>
                                Doing the opposite: building the best experience, then hacking it down for a handful of selected edge-cases means you’re almost certainly going to build an experience that’s excludes a lot of people.
                            </p>
                        </li>

                    </ul>
                </div>

                <div class="section flow-space-2xl-3xl spot-color-secondary">
                    <svg class="curve" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z" /></svg>
                    <div class="section__inner region">
                        <blockquote class="wrapper">
                            <p>Stick to those principles and making excellent websites that work for everyone suddenly becomes much, much easier.</p>
                        </blockquote>
                    </div>
                    <svg class="curve" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z" /></svg>
                </div>


            </article>

            {/* Why though? */}
            <article className="region">
                <div className=" wrapper flow prose">
                    <h2>Why though?</h2>
                    <p>It was in 2010 when <a href="https://twitter.com/beep">Ethan Marcotte</a>  published the legendary <a href="https://alistapart.com/article/responsive-web-design/">Responsive Web Design</a> article. It completely changed how we built websites for an ever-growing variety of device types and sizes.
                    </p>
                    <p>The article has aged really well, but the practice of web design has not. Oftentimes, designers and developers get stuck into pixel-pushing a design into shape with rigid methods to ensure it looks exactly like that Figma, Sketch or even Photoshop design. This attitude has stuck around for a long time though, even as far back as the very early days of the web, which Jeremy Keith touched on in <a href="https://resilientwebdesign.com/">Resilient Web Design</a>:
                    </p>

                    <blockquote>
                        <p> It was as though the web design community were participating in a shared consensual hallucination. Rather than acknowledge the flexible nature of the browser window, they chose to settle on one set width as the ideal …even if that meant changing the ideal every few years.
                        </p>
                        <p> Jeremy Keith - Resilient Web Design</p>
                    </blockquote>

                    <p>We absolutely <strong>don’t know</strong> what our audience device sizes are going to be or whether or not they have a decent connection speed, fully working browser or even a bright enough screen to present our designs how <strong>we want them to be presented</strong>. We are all guilty of micromanaging the browser in some aspects, and in turn, are creating an inflexible and fragile user experience.
                    </p>

                    <p>A better way to approach this is to <strong>be the browser’s mentor</strong> by setting some base rules and hints, then getting out of its way to let it make decisions based on the challenges it will <strong>undoubtedly face</strong>. Even looking at this 2015 report on Android device sizes tells us just how fragmented devices are. This was also conducted <strong>7 years ago</strong> and at the time of writing, it’s <strong>2022</strong>. That’s a long time for even more fragmentation to occur. Now factor in all of the other brands and types of device and you can really see how problematic it is, building websites in a rigid, specific manner.
                    </p>

                    <p>It makes sense to lose a bit of <strong>perceived control</strong> and instead, get even <strong>greater control</strong> by being the browser’s mentor and not its micromanger, right?
                    </p>

                    <p>Go ahead and open up this website on multiple devices or just resize the browser window. You’ll see it deals with anything that is thrown at it. It also uses progressive enhancement to leverage modern CSS, while providing a solid, base experience for browsers that don’t yet support those features, thanks to the usage of semantic HTML. All in, it’s around 2kb of CSS <strong>in total</strong>.
                    </p>
                </div>
            </article>

            {/* Tools of the trade  */}
            <article className="section spot-color-primary">
                <svg class="curve" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z" /></svg>

                <div className="section__inner region">
                    <div className="wrapper flow">
                        <h2>Tools of the trade</h2>
                        <p>Tools are just tools. They don’t really matter—especially to the people trying to use the websites you build. The same goes for frameworks too. The most important thing is that you stick to the key principles. Even so, here are some useful tools I use together to build flexible front-ends.
                        </p>
                        <ul role="list" className="grid features mt-l-xl">
                            <li className="flow">
                                <img src={cubecss} alt="cube" className="svg" />
                                <h3> <a href="https://cube.fyi/"> CUBE CSS </a></h3>
                                <p>A CSS methodology that’s orientated towards simplicity, pragmatism and consistency.
                                </p>
                            </li>

                            <li className="flow">
                                <img src={utopia} alt="cube" className="svg" />
                                <h3> <a href="https://utopia.fyi/"> Utopia</a></h3>
                                <p>A handy collection of generators and tools that let you build up various fluid type and space scales depending on viewport sizes to help with responsive design.
                                </p>
                            </li>
                            <li className="flow">
                                <img src={everylayout} alt="cube" className="svg" />
                                <h3> <a href="https://every-layout.dev/"> Every Layout </a></h3>
                                <p>A series of simple, composable layouts that can be ported to any project. There’s also heaps of learning material to help you really learn CSS layout.
                                </p>
                            </li>
                            <li className="flow">
                                <img src={designtoken} alt="cube" className="svg" />
                                <h3> <a href="https://piccalil.li/tutorial/what-are-design-tokens"> Design Tokens </a></h3>
                                <p>Centralized data—almost like a database of design values—that could be consumed by anything that understands a standard, like JSON to help with design consistency.
                                </p>
                            </li>
                            <li className="flow">
                                <img src={polypane} alt="cube" className="svg" />
                                <h3> <a href="https://a.paddle.com/v2/click/39438/105166?link=3110"> Polypane </a> </h3>
                                <p>A handy app that lets you spin up multiple viewports in various configurations to help you build truly responsive sites.
                                </p>
                            </li>
                            <li className="flow">
                                <img src={tailwind} alt="cube" className="svg" />
                                <h3> <a href="https://github.com/tailwindlabs/tailwindcss"> Tailwind</a> </h3>
                                <p>A utility-first CSS framework that is very useful for generating utility classes on demand for CUBE CSS.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <svg class="curve" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z" /></svg>

            </article>

            {/* conclusion section  */}
            <article className="signoff region">
                <div className=" wrapper flow flow-space-s-m">
                    <h2>So with all that new knowledge: </h2>
                    <p> Go Forth And Build Excellent Websites. </p>
                </div>
            </article>

            {/* footer section  */}
            <footer className="site-foot">
                <div className="wrapper">
                    <div className="site-foot__inner">
                        <img src="./vite.svg" alt="" />
                        <p>
                            Built using
                            <a href="https://cube.fyi/"> CUBE CSS Methodology </a>

                            by <a href="https://saugatrimal.com.np/">Saugat Rimal</a>.

                        </p>
                    </div>
                </div>
            </footer>

        </main >
    )
}

export default Home