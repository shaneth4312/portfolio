export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sarah Parker</h3>
            <p className="text-muted-foreground">
              Crafting exceptional digital experiences with modern technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@sarahparker.dev</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sarah Parker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}