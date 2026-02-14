export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About E-Shop</h1>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Welcome to E-Shop, your number one source for all things shopping. 
          We&apos;re dedicated to providing you the very best of products, with an 
          emphasis on quality, customer service, and uniqueness.
        </p>
        
        <p className="text-lg mb-6">
          Founded in 2024, E-Shop has come a long way from its beginnings. 
          When we first started out, our passion for providing the best shopping 
          experience drove us to start our own business.
        </p>
        
        <div className="bg-blue-50 p-8 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            To provide high-quality products at competitive prices while 
            ensuring exceptional customer service and a seamless shopping experience.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="space-y-3 text-lg">
          <li>✓ Wide selection of quality products</li>
          <li>✓ Competitive pricing</li>
          <li>✓ Fast and reliable shipping</li>
          <li>✓ Excellent customer support</li>
          <li>✓ Easy returns and refunds</li>
        </ul>
      </div>
    </div>
  );
}