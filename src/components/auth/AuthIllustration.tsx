export default function AuthIllustration() {
  return (
    <section className="block py-6 bg-black rounded-b-xl flex justify-center w-full lg:flex-col lg:justify-between lg:basis-[40%] lg:shrink-0 lg:max-w-xl lg:self-stretch lg:p-10 lg:bg-[url('/src/assets/images/illustrations/illustration-authentication.svg')] lg:bg-cover lg:bg-center lg:rounded-xl">
      <div className="bg-[url('/src/assets/images/logos/logo-large.svg')] w-[122px] h-[22px]"></div>
      <div className="hidden text-white lg:block">
        <h3 className="text-3xl font-bold pb-6">
          Keep track of your money and&nbsp;save for your&nbsp;future
        </h3>
        <p className="text-sm">
          Personal finance app puts you in control of your spending. Track
          transactions, set budgets, and add to savings pots easily.
        </p>
      </div>
    </section>
  );
}
