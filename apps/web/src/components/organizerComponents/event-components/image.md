{/_ Image Preview _/}
<div>
<label className="block font-semibold mb-1">
Upload Image Preview
</label>
<input
                  type="file"
                  accept="image/*"
                  onChange={handleImagePreviewChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
</div>
{eventData.EventImage[0].imagePreview && (
<div className="mt-2">
<p className="text-sm text-gray-600 mb-1">Image Preview:</p>
<div className="relative w-full h-48">
<Image
                      src={eventData.EventImage[0].imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover rounded"
                    />
</div>
</div>
)}

              {/* Image Content */}
              <div>
                <label className="block font-semibold mb-1">
                  Upload Image Content
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageContentChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              {eventData.EventImage[0].imageContent && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 mb-1">Image Content:</p>
                  <div className="relative w-full h-48">
                    <Image
                      src={eventData.EventImage[0].imagePreview}
                      alt="Content"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              )}
