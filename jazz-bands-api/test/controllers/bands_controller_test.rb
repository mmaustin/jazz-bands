require "test_helper"

class BandsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @band = bands(:one)
  end

  test "should get index" do
    get bands_url, as: :json
    assert_response :success
  end

  test "should create band" do
    assert_difference('Band.count') do
      post bands_url, params: { band: { band_name: @band.band_name, player_five: @band.player_five, player_four: @band.player_four, player_one: @band.player_one, player_three: @band.player_three, player_two: @band.player_two, signature_song: @band.signature_song } }, as: :json
    end

    assert_response 201
  end

  test "should show band" do
    get band_url(@band), as: :json
    assert_response :success
  end

  test "should update band" do
    patch band_url(@band), params: { band: { band_name: @band.band_name, player_five: @band.player_five, player_four: @band.player_four, player_one: @band.player_one, player_three: @band.player_three, player_two: @band.player_two, signature_song: @band.signature_song } }, as: :json
    assert_response 200
  end

  test "should destroy band" do
    assert_difference('Band.count', -1) do
      delete band_url(@band), as: :json
    end

    assert_response 204
  end
end
