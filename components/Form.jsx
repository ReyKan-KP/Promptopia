import Link from "next/link";
const Form = ({ type, handleSubmit, submitting, post, setPost }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} a post to share with the community.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            // type="text"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="form_textarea"
            placeholder="Write your AI prompt here..."
            required
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">
              (#product,#webdevelopment,#idea)
            </span>
          </span>
          <input
            // type="text"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className="form_input"
            placeholder="#tag"
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/">
            <button className="px-5 py-1.5 text-sm bg-red-700 rounded-full text-white">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-green-700 rounded-full text-white"
            disabled={submitting}
          >
            {submitting ? `${type}..` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
