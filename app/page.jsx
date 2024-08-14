import Feed from "@components/Feed";

export default function Home() {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover and share</h1>
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">IA powered prompts</span>
            <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga similique necessitatibus sunt maiores dolor quia nesciunt!</p>
            <Feed />
        </section>
    );
}