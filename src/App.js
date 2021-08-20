import React from 'react'

class App extends React.Component {
    state = { selectedFiles: null };
    componentDidUpdate = prevState => {
      if (prevState.selectedFiles !== this.state.selectedFiles) {
        this.renderPreviews();
      }
    };
  
    renderPreviews = () => {
      const { selectedFiles } = this.state;
      const previewContainer = document.getElementById("preview-container");
      for (let i = 0; i < selectedFiles.length; i++) {
        const preview = document.createElement("img");
        preview.id = `preview_${i}`;
        previewContainer.appendChild(preview);
        const reader = new FileReader();
        reader.onload = function(evt) {
          preview.src = reader.result;
        };
        reader.readAsDataURL(selectedFiles[i]);
      }
    };
    fileChangedHandler = event => {
      const files = event.target.files;
      this.setState({
        selectedFiles: files
      });
    };
    render() {
      return (
        <div className="App" style={{ marginTop: "100px" }}>
          <input type="file" multiple onChange={this.fileChangedHandler} />
          <div id="preview-container" />
        </div>
      );
    }
  }
  
  export default App;