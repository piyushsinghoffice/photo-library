import './App.css'
import { AppSidebar } from "./components/app-sidebar"
import { ImageDetails } from './components/image-details'
import { ThemeProvider } from "@/components/theme-provider"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen w-screen">
        <ResizablePanelGroup direction="horizontal" className="w-full">
          {/* Left Sidebar */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={25} className="border-r">
            <AppSidebar />
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Center Grid Area */}
          <ResizablePanel defaultSize={60} minSize={40}>
            <div className="p-4 overflow-y-auto h-full">
              {/* Your Image Grid goes here */}
              <p className="text-muted-foreground">Image Grid Area</p>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Right Image Details */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30} className="border-l">
            <div className="p-4 overflow-y-auto h-full">
              <ImageDetails />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </ThemeProvider>
  )
}

export default App
